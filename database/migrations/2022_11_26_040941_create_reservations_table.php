<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->enum('status',['Requested',"Confirmed","Processing","Cancelled","Complete"]);
            $table->unsignedInteger('billed');
            $table->unsignedInteger('total_guests');
            $table->dateTime('from');
            $table->dateTime('to');
            $table->unsignedInteger('user_id')->customer("Customer User ID")->nullable();
            $table->unsignedInteger('mailing_address_id')->nullable();
            $table->unsignedInteger('biling_address_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
