<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pasien;
use Inertia\Inertia;
use App\Models\Bangsal;
use Illuminate\Support\Facades\DB;

class SkmController extends Controller
{
    public function cekRm(Request $request)
    {
        $pasien = Pasien::find($request->no_rm);
        $response = [
            'status' => 'success',
            'message' => 'Data ditemukan',
            'data' => $pasien ? $pasien : []
        ];
        return response()->json($response);
    }

    public function dataDiri()
    {
        Inertia::share([
            'app' => [
                'name' => config('app.name')
            ]
        ]);
        Inertia::render('Skm/DataDiri', [
            'bangsal' => Bangsal::where('status', '1')->get()
        ]);
    }

    public function bangsal()
    {
        $bangsal = Bangsal::where('status', '1')->get();
        $response = [
            'status' => 'success',
            'message' => 'Data ditemukan',
            'data' => $bangsal
        ];
        return response()->json($response);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'telp' => 'required',
            'jk' => 'required',
            'pendidikan' => 'required',
            'pekerjaan' => 'required',
            'jns_layanan' => 'required',
            'p1' => 'required',
            'p2' => 'required',
            'p3' => 'required',
            'p4' => 'required',
            'p5' => 'required',
            'p6' => 'required',
            'p7' => 'required',
            'p8' => 'required',
            'p9' => 'required',
        ], [
            'nama.required' => 'Nama harus diisi',
            'telp.required' => 'No. Telp harus diisi',
            'jk.required' => 'Jenis Kelamin harus diisi',
            'pendidikan.required' => 'Pendidikan harus diisi',
            'pekerjaan.required' => 'Pekerjaan harus diisi',
            'jns_layanan.required' => 'Jenis Layanan harus diisi',
            'p1.required' => 'Pertanyaan 1 harus diisi',
            'p2.required' => 'Pertanyaan 2 harus diisi',
            'p3.required' => 'Pertanyaan 3 harus diisi',
            'p4.required' => 'Pertanyaan 4 harus diisi',
            'p5.required' => 'Pertanyaan 5 harus diisi',
            'p6.required' => 'Pertanyaan 6 harus diisi',
            'p7.required' => 'Pertanyaan 7 harus diisi',
            'p8.required' => 'Pertanyaan 8 harus diisi',
            'p9.required' => 'Pertanyaan 9 harus diisi',
        ]);

        try {
            DB::table('skm')
                ->insert([
                    'nama' => $request->nama,
                    'telp' => $request->telp,
                    'jk' => $request->jk,
                    'pendidikan' => $request->pendidikan,
                    'pekerjaan' => $request->pekerjaan,
                    'jns_layanan' => $request->jns_layanan,
                    'p1' => $request->p1,
                    'p2' => $request->p2,
                    'p3' => $request->p3,
                    'p4' => $request->p4,
                    'p5' => $request->p5,
                    'p6' => $request->p6,
                    'p7' => $request->p7,
                    'p8' => $request->p8,
                    'p9' => $request->p9,
                    'saran' => $request->saran,
                    'tanggal' => date('Y-m-d')
                ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data berhasil disimpan',
                'data' => []
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'data' => []
            ]);
        }
    }
}
