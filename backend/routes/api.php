<?php

use App\Http\Controllers\DistrictController;
use App\Http\Controllers\RestaurantController;
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

// --------- DISTRICTS---------
Route::get('district', [DistrictController::class, 'list']);
Route::get('district/{id}', [DistrictController::class, 'show']);

// --------- RESTAURANTS---------
Route::get('restaurant', [RestaurantController::class, 'list']);
Route::get('restaurant/{id}', [RestaurantController::class, 'show']);

// ---------- RESTAURANT D'UN DISTRICT --------
Route::get('district/{id}/restaurant', [DistrictController::class, 'getRestaurantByDistrictId']);
