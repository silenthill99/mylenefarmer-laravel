<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConcertResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'affiche_path' => $this->affiche_path,
            'setlist' => $this->setlist,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'alert_message' => $this->alert_message,
            'filmed_at' => $this->filmed_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
