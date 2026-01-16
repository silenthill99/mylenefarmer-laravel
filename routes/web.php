<?php /** @noinspection PhpParamsInspection */

use App\Http\Controllers\ClipController;
use App\Http\Controllers\LoginUserController;
    use App\Http\Controllers\RegisteredUserController;
    use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post("/logout", [LoginUserController::class, 'destroy'])->name('logout');
    Route::get("/clips/create", [ClipController::class, 'create'])->name('clips.create');
    Route::post("/clips", [ClipController::class, 'store'])->name('clips.store');

    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware('guest')->group(function () {
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('registered-user.create');
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('registered-user.store');

    Route::get("/login", [LoginUserController::class, 'create'])->name('login');
    Route::post("/login", [LoginUserController::class, 'store'])->name('login-user.store');
});

Route::get("/clips", [ClipController::class, 'index'])->name('clips.index');
