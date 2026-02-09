<?php /** @noinspection PhpParamsInspection */

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ClipController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post("/logout", [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::get("/clips/create", [ClipController::class, 'create'])->name('clips.create');
    Route::post("/clips", [ClipController::class, 'store'])->name('clips.store');

    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::resource('albums', AlbumController::class)->except('show');
});

Route::resource('albums', AlbumController::class)->only('show');

Route::middleware('guest')->group(function () {
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('registered-user.create');
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('registered-user.store');

    Route::get("/login", [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post("/login", [AuthenticatedSessionController::class, 'store'])->name('login-user.store');

    Route::get("/forgot-password", [PasswordResetLinkController::class, 'create'])->name('password.request');
    Route::post("/forgot-password", [PasswordResetLinkController::class, 'store'])->name('password.email');

    Route::get("/reset-password/{token}", [NewPasswordController::class, 'create'])->name('password.reset');
    Route::post("/reset-password", [NewPasswordController::class, 'store'])->name('password.update');
});

Route::get("/clips", [ClipController::class, 'index'])->name('clips.index');
