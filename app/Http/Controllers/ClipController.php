<?php

namespace App\Http\Controllers;

use App\Models\Clip;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClipController extends Controller
{
    public function index()
    {
        $clips = Clip::all();
        return Inertia::render("clips/index", compact("clips"));
    }

    public function store(Request $request)
    {
        $data = $request->validate([

        ]);

        return Clip::create($data);
    }

    public function show(Clip $clip)
    {
        return $clip;
    }

    public function update(Request $request, Clip $clip)
    {
        $data = $request->validate([

        ]);

        $clip->update($data);

        return $clip;
    }

    public function destroy(Clip $clip)
    {
        $clip->delete();

        return response()->json();
    }
}
