<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Album extends Model
{
    /** @use HasFactory<\Database\Factories\AlbumFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'tracklist',
        'image_path',
        'coming_soon'
    ];

    public static function booted()
    {
        static::creating(function ($album) {
            $album->slug = Str::slug($album->title);
        });
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
