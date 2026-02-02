<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateClipRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "title" => "nullable|string|max:255",
            "url" => ['nullable', "url", "regex:/^(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)[A-Za-z0-9_-]{11}(?:[&?][^\s]*)?$/"]
        ];
    }
}
