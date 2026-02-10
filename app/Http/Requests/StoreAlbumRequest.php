<?php

namespace App\Http\Requests;

use App\Models\Album;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreAlbumRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return request()->user()->can('create', Album::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => ["required", "string", "max:255"],
            "image" => ["required", "image", "mimes:jpeg,jpg,png", "max:8000"],
            "tracklist" => ["required", "string"],
            "coming_soon" => ["required", "boolean"],
            "deezer_url" => ["required", "string", "url", "regex:/^(?:https?:\/\/)?(?:www\.)?deezer\.com\/[a-z]{2}\/album\/\d+(?:\?.*)?$/"],
            "spotify_url" => ["required", "string", "url", "regex:/^(?:https?:\/\/)?open\.spotify\.com\/intl-[a-z]{2}\/album\/[a-zA-Z0-9]+(?:\?.*)?$/"],
            "apple_music_url" => ["required", "string", "url", "regex:/^https:\/\/music\.apple\.com\/[a-z]{2}\/album\/[a-z-_.]+\/\d+(?:\?.*)?/"]
        ];
    }
}
