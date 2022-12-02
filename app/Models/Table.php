<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'capacity',
        'min_fee',
        'status'
    ];
    static public function getAvailableTable($guestCount,$dateTime,$excludeTables){
        $query = self::query();
        if(!empty($excludeTables)){
            $query = $query->whereNotIn('id',$excludeTables);
        }
        return $query->where('capacity',"<=",$guestCount)
            ->whereRaw('id NOT IN ('.
            'SELECT `table_id` FROM `reservation_tables` WHERE `reservation_id` IN ('.
                'SELECT id FROM `reservations` WHERE `status` IN ("Confirmed","Requested","Processing") AND ? BETWEEN `from` AND `to`'.
            '))',[$dateTime])->orderBy('capacity',"DESC")->selectRaw('id,name,capacity,0 min_fee')->first();
    }
    static public function getRequestedTable($guestCount,$dateTime,$excludeTables){
        $query = self::query();
        if(!empty($excludeTables)){
            $query = $query->whereNotIn('id',$excludeTables);
        }
        return $query->where('capacity',"<=",$guestCount)
            ->whereRaw('id IN ('.
            'SELECT `table_id` FROM `reservation_tables` WHERE `reservation_id` IN ('.
                'SELECT id FROM `reservations` WHERE `status` = "Confirmed" AND ? BETWEEN `from` AND `to`'.
            '))',[$dateTime])->orderBy('capacity',"DESC")->selectRaw('id,name,capacity,0 min_fee')->first();
    }
}
