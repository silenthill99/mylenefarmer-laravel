<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateConcertRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->concert);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required", "string", "max:255"],
            "affiche" => ["nullable", "file", "mimetypes:image/jpeg,image/png", "max:8000"],
            "setlist" => ["required", "string"],
            "start_date" => ["required", "date"],
            "end_date" => ["required", "date", "date_format:Y-m-d"],
            "alert_message" => ["nullable", "string"],
            "filmed_at" => ["required", "string", "max:255"],
        ];
    }
}
