<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTable extends Model
{
    use HasFactory;
    protected $fillable = [
        'table_id',
        'reservation_id'
    ];
    public $timestamps = false;
}
