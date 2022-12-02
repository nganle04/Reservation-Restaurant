<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\Api\AuthController::class,'login']);
Route::post('register', [App\Http\Controllers\Api\AuthController::class,'register']);
Route::post('reg-verify', [App\Http\Controllers\Api\AuthController::class,'registrationVarify']);
Route::post('/tables', [App\Http\Controllers\Api\TableController::class,'index']);
Route::post('/place-booking', [App\Http\Controllers\Api\TableController::class,'placeBooking']);
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/user', [App\Http\Controllers\Api\AuthController::class,'details']);
    Route::get('/logout', [App\Http\Controllers\Api\AuthController::class,'logout']);
    Route::group(['middleware' => ['role:super-admin|admin'],'prefix'=>'admin'], function () {
        Route::group(['prefix'=>'users'], function () {
            Route::get('/', [App\Http\Controllers\Api\Admin\UserController::class,'index']);
            Route::post('/create', [App\Http\Controllers\Api\Admin\UserController::class,'create']);
            Route::get('/{id}/data', [App\Http\Controllers\Api\Admin\UserController::class,'data']);
            Route::post('/{id}/update', [App\Http\Controllers\Api\Admin\UserController::class,'update']);
        });
        Route::group(['prefix'=>'tables'], function () {
            Route::get('/', [App\Http\Controllers\Api\Admin\TableController::class,'index']);
            Route::post('/create', [App\Http\Controllers\Api\Admin\TableController::class,'create']);
            Route::get('/{id}/data', [App\Http\Controllers\Api\Admin\TableController::class,'data']);
            Route::post('/{id}/update', [App\Http\Controllers\Api\Admin\TableController::class,'update']);
        });
        Route::get('/roles', [App\Http\Controllers\Api\Admin\UserController::class,'roles']);
    });
});
