<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Table;
use App\Models\Reservation;
use App\Models\ReservationTable;
use App\Models\UserAddress;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TableController extends Controller
{
    private function getTables($dateTime,$guestCount){
        $guestsRemaining = $guestCount;
        $tables = [];
        $tableIds = [];
        $fee = 0;
        while($guestsRemaining > 0 && !empty($table = Table::getAvailableTable($guestsRemaining,$dateTime,$tableIds))){
            $guestsRemaining -= $table->capacity;
            array_push($tables,$table);
            array_push($tableIds,$table->id);
        }
        while($guestsRemaining > 0 && !empty($table = Table::getRequestedTable($guestsRemaining,$dateTime,$tableIds))){
            $guestsRemaining -= $table->capacity;
            $table->min_fee = 10;
            array_push($tables,$table);
            array_push($tableIds,$table->id);
            $fee += 10;
        }
        return compact('tables','fee');
    }
    public function index(Request $request){
        $validator = Validator::make($request->all(), [
            'date' => 'required|date',
            'guestCount' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        $data = $validator->getData();
        if(strtotime(now()) > strtotime($data['date'])){
            return response()->json(['message' => "Invalid Date & Time"], 400);
        }
        return response()->json($this->getTables($data['date'],$data['guestCount']));
    }
    public function placeBooking(Request $request){
        $validator = Validator::make($request->all(), [
            'dateTime' => 'required|date',
            'guestCount' => 'required|numeric',
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'mailing' => 'required',
            'newAccount' => 'required|boolean',
            'differentBilling' => 'required|boolean',
            'password' => '',
            'confirmPassword' => 'same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }
        $data = $validator->getData();
        if(strtotime(now()) > strtotime($data['dateTime'])){
            return response()->json(['message' => "Invalid Date & Time"], 400);
        }
        extract($this->getTables($data['dateTime'],$data['guestCount']));
        if(empty($tables)){
            return response()->json(['message' => "Table Not Found"], 400);
        }
        DB::beginTransaction();
        $user = $request->user();
        if(empty($user)){
            $user = User::whereEmail($data['email'])->orWhere('phone',$data['phone'])->first();
        }
        if(empty($user) && $data['newAccount'] == true){
            $validator = Validator::make($request->all(), [
                'password' => 'required',
                'confirmPassword' => 'required|same:password',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()], 400);
            }
            $data['password'] = Hash::make($data['password']);
            $user = User::create($data);
            $user->attachRole('user');
        }
        $mailing = UserAddress::create([
            'user_id'=> empty($user)?null:$user->id,
            'status'=>"Mailing",
            'name'=>$data['name'],
            'email'=>$data['email'],
            'phone'=>$data['phone'],
            'address_line_1'=>$data['mailing']['addressLine1'],
            'address_line_2'=>$data['mailing']['addressLine2'],
            'city'=>$data['mailing']['city'],
            'state'=>$data['mailing']['state'],
            'country'=>$data['mailing']['country']
        ]);
        $reservationData = [
            'status' => "Requested",
            'billed' => $fee,
            'total_guests' => $data['guestCount'],
            'from' => $data['dateTime'],
            'to' => date('Y-m-d H:i:s',strtotime($data['dateTime']. " + 1 hour")),
            'user_id'=> empty($user)?null:$user->id,
            'mailing_address_id'=>$mailing->id
        ];
        if($data['differentBilling']){
            $billing = UserAddress::create([
                'user_id'=> empty($user)?null:$user->id,
                'status'=>"Mailing",
                'name'=>$data['name'],
                'email'=>$data['email'],
                'phone'=>$data['phone'],
                'address_line_1'=>$data['billing']['addressLine1'],
                'address_line_2'=>$data['billing']['addressLine2'],
                'city'=>$data['billing']['city'],
                'state'=>$data['billing']['state'],
                'country'=>$data['billing']['country']
            ]);
            $reservationData['biling_address_id'] = $billing->id;
        }
        $reservation = Reservation::create($reservationData);
        foreach($tables as $table){
            ReservationTable::create([
                'table_id'=>$table->id,
                'reservation_id'=>$reservation->id
            ]);
        }

        if(!empty($data['tableAllocated'] && is_array($data['tableAllocated']))){

        }else{
            return response()->json(['message' => "No Table Allcoated"], 400);
        }
        DB::commit();
        return response("Success");
    }
}
