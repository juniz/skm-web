<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skm extends Model
{
    protected $table = 'skm';
    public $timestamps = false;

    protected $fillable = [
        'nama',
        'telp',
        'jk',
        'pendidikan',
        'pekerjaan',
        'jns_layanan',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6',
        'p7',
        'p8',
        'p9',
        'saran',
        'tanggal',
    ];
}
