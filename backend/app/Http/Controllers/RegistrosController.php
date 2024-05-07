<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registros;

class RegistrosController extends Controller
{
    function addRegistro(Request $req)
    {
        $registro = new Registros;
        $registro->nombre=$req->input('nombre');
        $registro->cvu=$req->input('cvu');
        $registro->instituto=$req->input('instituto');
        $registro->pais=$req->input('pais');
        $registro->telefono=$req->input('telefono');
        $registro->correo=$req->input('correo');
        $registro->tipoEstancia=$req->input('tipoEstancia');
        $registro->responsable=$req->input('responsable');
        $registro->proyecto=$req->input('proyecto');
        $registro->justificacion=$req->input('justificacion');
        $registro->fecha_inicio=$req->input('fecha_inicio');
        $registro->fecha_fin=$req->input('fecha_fin');
        $registro->curp=$req->input('curp');
        $registro->solicitud=$req->input('solicitud');
        $registro->save();
        return $registro;   
    }

    public function index()
    {
        $registros = Registros::all();
        return response()->json($registros);
    }

    public function updateRegistro(Request $req, $id)
    {
        $registro = Registros::find($id);

        if (!$registro) {
            return response()->json(['error' => 'Registro no encontrado'], 404);
        }

        $registro->fill($req->all());
        $registro->save();

        return response()->json($registro);
    }

    public function deleteRegistro($id)
    {
    $registro = Registros::find($id);

    if (!$registro) {
        return response()->json(['error' => 'Registro no encontrado'], 404);
    }

    $registro->delete();

    return response()->json(['message' => 'Registro eliminado correctamente']);
    }
}
