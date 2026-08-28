<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;

class PasswordResetLinkController extends Controller
{
    public function create() {
        return Inertia::render('auth/forgot-password');
    }

    public function store(Request $request) {
        $request->validate([
            "email" => "required|email",
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::ResetLinkSent
            ? Inertia::flash(["status" => __($status), "success" => "Un email de reset de mot de passe vous a été envoyé."])->back()
            : back()->withErrors(['email' => __($status)]);
    }
}
