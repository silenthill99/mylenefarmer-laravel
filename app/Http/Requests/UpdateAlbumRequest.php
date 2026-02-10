<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAlbumRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return request()->user()->can('update', $this->route('album'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => ["nullable", "string", "max:255"],
            "image" => ["nullable", "image", "mimes:jpeg,jpg,png", "max:8000"],
            "tracklist" => ["nullable", "string"],
            "coming_soon" => ["nullable", "boolean"],
            "deezer_url" => ["nullable", "string", "url", "regex:/^(?:https?:\/\/)?(?:www\.)?deezer\.com\/[a-z]{2}\/album\/\d+(?:\?.*)?$/"],
            "spotify_url" => ["nullable", "string", "url", "regex:/^(?:https?:\/\/)?open\.spotify\.com\/intl-[a-z]{2}\/album\/[a-zA-Z0-9]+(?:\?.*)?$/"],
            "apple_music_url" => ["nullable", "string", "url", "regex:/^https:\/\/music\.apple\.com\/[a-z]{2}\/album\/[a-z-_.]+\/\d+(?:\?.*)?/"]
        ];
    }
}
