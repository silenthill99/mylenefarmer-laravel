<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Concert extends Model
{
    protected $fillable = [
        "name",
        "affiche_path",
        "setlist",
        "start_date",
        "end_date",
        "alert_message",
        "filmed_at"
    ];


    protected static function booted(): void
    {
        static::creating(function ($concert) {
            $concert->slug = Str::slug($concert->name);
        });
    }

    public function getRouteKeyName(): string
    {
        return "slug";
    }
}
