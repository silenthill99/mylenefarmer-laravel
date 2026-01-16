<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClipRequest;
use App\Http\Resources\ClipResource;
use App\Models\Clip;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClipController extends Controller
{
    use AuthorizesRequests;
    public function index()
    {
        $clips = Clip::all();
        if (Auth::check()) {
            Auth::user()?->load("role");
        }
        $can_create = Auth::user()->can("create", Clip::class);
        return Inertia::render("clips/index", [
            'clips' => ClipResource::collection($clips),
            'can_create' => $can_create
        ]);
    }

    public function store(ClipRequest $request)
    {
        $data = $request->validated();
        Clip::create($data);

        return redirect()->intended(route('clips.index', absolute: false));
    }

    public function show(Clip $clip)
    {
        return $clip;
    }

    public function update(ClipRequest $request, Clip $clip)
    {
        $data = $request->validated();

        $clip->update($data);

        return $clip;
    }

    public function destroy(Clip $clip)
    {
        $clip->delete();

        return response()->json();
    }

    public function create()
    {
        $this->authorize('create', Clip::class);
        return Inertia::render("clips/create");
    }
}
