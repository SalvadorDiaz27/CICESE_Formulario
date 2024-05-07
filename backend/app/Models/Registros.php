<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registros extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', 'cvu', 'instituto', 'pais', 'telefono', 'correo', 'tipoEstancia', 'responsable', 'proyecto', 'justificacion', 'fecha_inicio', 'fecha_fin', 'curp', 'solicitud', 'id'
    ];
}
