<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConcertResource;
use App\Models\Concert;
use App\Http\Requests\StoreConcertRequest;
use App\Http\Requests\UpdateConcertRequest;
use App\Services\ImageStorageService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ConcertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::authorize('view-any', Concert::class);
        $concerts = Concert::all();
        return Inertia::render('concerts/index', [
            'concerts' => ConcertResource::collection($concerts),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Concert::class);
        return Inertia::render('concerts/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConcertRequest $request)
    {
        $data = $request->validated();
        $image = $request->file('affiche');
        $data['affiche_path'] = $image->store('images/concerts', 'public');

        Concert::create($data);

        return Redirect::route('concerts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Concert $concert)
    {
        return Inertia::render('concerts/show', [
            'concert' => new ConcertResource($concert),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Concert $concert)
    {
        Gate::authorize('update', $concert);
        return Inertia::render('concerts/edit', [
            'concert' => new ConcertResource($concert),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConcertRequest $request, Concert $concert, ImageStorageService $service)
    {
        $data = $request->validated();
        if ($request->hasFile('affiche')) {
            $service->deleteImage($concert->affiche_path);
            $image = $request->file('affiche');
            $data['affiche_path'] = $image->store('images/concerts', 'public');
        }
        $concert->update($data);
        return Redirect::route('concerts.show', $concert);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Concert $concert)
    {
        Gate::authorize('delete', $concert);
        $concert->delete();
        return Redirect::route('concerts.index');
    }
}
