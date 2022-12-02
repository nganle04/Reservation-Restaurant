<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'status',
        'billed',
        'total_guests',
        'from',
        'to',
        'user_id',
        'mailing_address_id',
        'biling_address_id'
    ];
}
