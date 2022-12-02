<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\RegVerifyMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Encryption\DecryptException;

class AuthController extends Controller
{
     /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 406);
        }
    //    return response()->json(['sent' => $request->all()], 401);
        $authAttemptSuccess = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        if ($authAttemptSuccess) {
            $user = Auth::user();
            $success['message'] = "Login Successful";
            $success['currentUser'] = $user;
            $success['currentUser']['roles'] = $user->roles;
            $success['currentUser']['token'] = $user->createToken('MyApp')->accessToken;
            return response()->json($success, 200);
        }else{
            return response()->json(['message' => 'Unauthorised'], 401);
        }
        
    }

    /**
     * Register api
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required',
            'password' => 'required',
            'confirmPassword' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        $input = $request->all();

        $otp = $this->generateRandomString(6);
        $token = Crypt::encrypt([
            'name' => $input['name'],
            'email' => $input['email'],
            'phone' => $input['phone'],
            'password' => Hash::make($input['password']),
            'otp' => $otp,
            'expired_at' => round(microtime(true)+300000000)
        ]);

        Mail::to($input['email'])->send(new RegVerifyMail($otp));
        return response()->json(['token' => $token], 200);
    }
    
    /**
     * Registration Verify api
     */
    public function registrationVarify(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'otp' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        $input = $request->all();
        try {
            $userData = Crypt::decrypt($input['token']);
        } catch (DecryptException $e) {
            return response()->json(["message"=>"Invalid Token"], 400);
        };
        if($userData['otp']!=$input['otp'] ){
            return response()->json(["message"=>"Invalid OTP"], 400);
        }
        if($userData['expired_at']<microtime(true) ){
            return response()->json(["message"=>"OTP Expired"], 400);
        }
        if(User::whereEmail($userData['email'])->count() >0){
            return response()->json(["message"=>"Registration ALready Completed"], 400);
        }
        $userData['email_verified_at'] = date('Y-m-d H:i:s');
        $user = User::create($userData);
        $user->attachRole('user');
        $user['token'] = $user->createToken('MyApp')->accessToken;
        $user['roles'] = $user->roles;
        return response()->json($user, 200);
    }
    
    public function details(Request $request) {
        $user = $request->user();
        $user['roles'] = $user->roles;
        return response()->json($user, 200);
    }
    private static function generateRandomString($length = 10)
    {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json(['message'=>"Successfully Logged Out"], 200);
    }
}
