<?php

use App\Http\Controllers\PersonnelController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('personnel', [PersonnelController::class,'fetchData']);
Route::post('delete',[PersonnelController::class,'delete']);
Route::post('create', [PersonnelController::class,'addData']);
Route::post('update',[PersonnelController::class,'update']);
