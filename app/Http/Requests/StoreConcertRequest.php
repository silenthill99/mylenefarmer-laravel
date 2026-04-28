<?php

namespace App\Http\Requests;

use App\Models\Concert;
use App\Policies\ConcertPolicy;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreConcertRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->can('create', Concert::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required", "string", "max:255"],
            "affiche" => ["required", "file", "mimetypes:image/jpeg,image/png", "max:8000"],
            "setlist" => ["required", "string"],
            "start_date" => ["required", "date"],
            "end_date" => ["required", "date", "date_format:Y-m-d"],
            "alert_message" => ["nullable", "string"],
            "filmed_at" => ["required", "string", "max:255"],
        ];
    }
}
