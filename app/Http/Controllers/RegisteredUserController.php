<?php

    namespace App\Http\Controllers;

    use App\Models\User;
    use Auth;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Redirect;
    use Illuminate\Support\Str;
    use Inertia\Inertia;

    class RegisteredUserController extends Controller
    {
        public function create()
        {
            return Inertia::render('auth/register');
        }

        public function store(Request $request)
        {
            $data = $request->validate([
                'name' => ['required'],
                'email' => ['required', 'email', 'max:254', 'unique:users'],
                'password' => ['required', 'confirmed'],
            ]);

            $data['role_id'] = 1;
            $data['slug'] = Str::slug($request->name);

            $user = User::create($data);

            Auth::login($user);

            return Redirect::route('home');
        }
    }
