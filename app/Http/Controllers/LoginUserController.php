<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Redirect;
    use Inertia\Inertia;

    class LoginUserController extends Controller
    {
        public function create()
        {
            return Inertia::render('auth/login');
        }

        public function store(Request $request)
        {
            dd($request->all());
        }

        public function destroy() {
            Auth::logout();
            return Redirect::back();
        }
    }
