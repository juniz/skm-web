<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SkmController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Skm/Index');
});

Route::prefix('api')->group(function () {
    Route::get('cek-rm', [SkmController::class, 'cekRm']);
    Route::get('bangsal', [SkmController::class, 'bangsal']);
    Route::post('skm', [SkmController::class, 'submit']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
