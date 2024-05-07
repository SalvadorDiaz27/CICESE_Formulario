<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $role = $user->roles()->first()->id; 

            $token = $user->createToken('AuthToken')->plainTextToken;

            Log::info('Token obtenido: ' . $token);

            return response()->json([
                'user' => $user,
                'role' => $role,
                'token' => $token,
                'message' => 'Inicio de sesión exitoso'
            ]);
        }

        Log::info('Credenciales no válidas: ' . $request->email . ', ' . $request->password);

        return response()->json(['message' => 'Credenciales inválidas'], 401);
    }
}
