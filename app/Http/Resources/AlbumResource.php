<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "slug" => $this->resource->slug,
            "title" => $this->resource->title,
            "tracklist" => $this->resource->tracklist,
            'image_path' => $this->resource->image_path,
            'coming_soon' => $this->resource->coming_soon,
            'deezer_url' => $this->resource->deezer_url,
            'spotify_url' => $this->resource->spotify_url,
            'apple_music_url' => $this->resource->apple_music_url,
        ];
    }
}
