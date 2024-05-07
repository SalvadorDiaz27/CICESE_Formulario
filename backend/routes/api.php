<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\RegistrosController;

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

Route::post('/login', [LoginController::class, 'login']);

Route::post('/register', [RegisterController::class, 'register']);

Route::post('/addregistro', [RegistrosController::class, 'addRegistro']);

Route::get('/registros', [RegistrosController::class, 'index']);

Route::put('/updateregistro/{id}', [RegistrosController::class, 'updateRegistro']);

Route::delete('/registros/{id}', [RegistrosController::class, 'deleteRegistro']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
