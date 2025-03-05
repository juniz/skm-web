<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bangsal extends Model
{
    protected $table = 'bangsal';
    protected $primaryKey = 'kd_bangsal';
    public $timestamps = false;
    public $incrementing = false;
    public $keyType = 'string';
}
