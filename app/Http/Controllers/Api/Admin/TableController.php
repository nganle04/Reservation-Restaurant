<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TableController extends Controller
{
    //
    public function index(Request $req){
        $isSuperAdmin = $req->user()->hasRole("super-admin");
        $keyword = $req->get('s');
        $query = User::query();
        if (!$isSuperAdmin) {
            $query = $query->whereRoleIs(Role::where('name','!=','super-admin')->pluck('name')->toArray());
        }
        if (!empty($keyword)) {
            $query = $query->orWhere('name', 'LIKE', "%$keyword%")
            ->orWhere('email', 'LIKE', "%$keyword%")
            ->orWhere('phone', 'LIKE', "%$keyword%");
        }
        $users = $query->latest()->paginate();
        $roles = [];
        foreach($users as $user){
            $roles[] = $user->roles()->get();
        }
        return response()->json(compact('users','roles'));
    }
    public function roles(Request $req){
        $isSuperAdmin = $req->user()->hasRole("super-admin");
        $query = Role::query();
        if (!$isSuperAdmin) {
            $query = $query->where('name','!=','super-admin');
        }
        $roles = $query->selectRaw('id, name, display_name')->get();
        return response()->json($roles);
    }
    public function data(Request $req,$id){
        $isSuperAdmin = $req->user()->hasRole("super-admin");
        $user = User::findOrFail($id);
        if (!$isSuperAdmin && $user->hasRole('super-admin')) {
            return response()->json(['success'=>false]);
        }
        $role = $user->roles()->first();
        return response()->json(compact('user','role'));
    }
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'role' => 'required',
            'password' => 'required',
            'confirmPassword' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        DB::beginTransaction();
        $data = $validator->getData();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        $user->attachRole($data['role']);
        DB::commit();
        return response('success');
    }
    public function update(Request $req,$id){
        $validator = Validator::make($req->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'role' => 'required',
            'password' => '',
            'confirmPassword' => 'same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        $data = $validator->getData();
        $user = User::findOrFail($id);
        $user->name = $data['name'];
        if($user->email != $data['email']){
            if(User::whereEmail($data['email'])->count() > 0){
                return response()->json(['message' => ['email'=>['The Email is taken']]], 400);
            }
            $user->email = $data['email'];
        }
        if($user->phone != $data['phone']){
            if(User::wherePhone($data['phone'])->count() > 0){
                return response()->json(['message' => ['phone'=>['The Phone Number is taken']]], 400);
            }
            $user->phone = $data['phone'];
        }
        if(!empty($data['password'])){
            $user->password = Hash::make($data['password']);
        }
        DB::beginTransaction();
        $user->save();
        if(!$user->hasRole($data['role'])){
            $user->detachRoles($user->roles()->get());
            $user->attachRole($data['role']);
        }
        DB::commit();
        return response('success');
    }
    public function delete($id){
        $isSuperAdmin = $req->user()->hasRole("super-admin");
        $query = User::query();
        if (!$isSuperAdmin) {
            $query = $query->whereRoleIs(Role::where('name','!=','super-admin')->pluck('name')->toArray());
        }
        $users = $query->latest()->paginate(10);
        return response()->json(compact('users'));
    }
}
