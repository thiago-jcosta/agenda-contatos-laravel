<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('contact/add', [ContactController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('contact.create');

Route::post("contact/add", [ContactController::class, "store"])
    ->middleware(['auth', 'verified'])->name("contact.store");

Route::get("contact/successAdd", [ContactController::class, "successStore"])
    ->middleware(['auth', 'verified'])->name("contact.successStore");

Route::get("contact/view", [ContactController::class, "index"])
    ->middleware(['auth', 'verified'])->name("contact.view");

Route::get("contact/edit/{contact}", [ContactController::class, "edit"])
    ->middleware(['auth', 'verified'])->name("contact.edit");

Route::post("contact/edit/{contact}", [ContactController::class, "update"])
    ->middleware(['auth', 'verified'])->name("contact.update");

Route::get("contact/successEdit", [ContactController::class, "successEdit"])
    ->middleware(['auth', 'verified'])->name("contact.successUpdate");

Route::post("contact/delete/{contact}", [ContactController::class, "destroy"])
    ->middleware(['auth', 'verified'])->name("contact.delete");

require __DIR__.'/auth.php';
