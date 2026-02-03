<?php

    namespace App\Http\Controllers\Auth;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Redirect;
    use Inertia\Inertia;

    class AuthenticatedSessionController extends Controller
    {
        public function create()
        {
            return Inertia::render('auth/login');
        }

        public function store(Request $request)
        {
            $data = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            $remember = $request->boolean('remember');

            Auth::attempt($data, $remember);

            if (Auth::attempt($data, $remember)) {
                $request->session()->regenerate();
                return Redirect::intended(route('home', absolute: false));
            }

            return Redirect::back()->withErrors(["failure" => "Identifiants incorrects"]);
        }

        public function destroy() {
            Auth::logout();
            return Redirect::back();
        }
    }
