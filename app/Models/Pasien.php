<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    protected $table = 'pasien';
    protected $primaryKey = 'no_rkm_medis';
    public $timestamps = false;
    public $incrementing = false;
    public $keyType = 'string';
}
