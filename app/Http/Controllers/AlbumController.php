<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;
use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Auth::user()->can('viewAny', Album::class);
        return Inertia::render('albums/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('viewAny', Album::class);
        return Inertia::render('albums/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAlbumRequest $request)
    {
        $data = $request->validated();

        $image_name = time() . "_" . $data['image']->getClientOriginalName();
        $data['image_path'] = $data['image']->storeAs('images/albums', $image_name, 'public');

        Album::create($data);

        return redirect()->route('albums.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        return Inertia::render('albums/show', [
            'album' => new AlbumResource($album)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Album $album)
    {
        Gate::authorize('update', $album);

        return Inertia::render('albums/edit', [
            'album' => new AlbumResource($album)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAlbumRequest $request, Album $album)
    {
        Gate::authorize('update', $album);
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $this->deleteImage($album->image_path);

            $image_name = time() . "_" . $data['image']->getClientOriginalName();
            $data['image_path'] = $data['image']->storeAs('images/albums', $image_name, 'public');
        }

        $album->update($data);
        return redirect()->route('albums.show', $album);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        Gate::authorize('create', $album);
        $album->delete();
        $this->deleteImage($album->image_path);
        return Redirect::route('albums.index')->with('success', "Album supprimé avec succès !");
    }

    private function deleteImage(string $image_link)
    {
        if (Storage::disk('public')->exists($image_link)) {
            Storage::disk('public')->delete($image_link);
        }
    }
}
