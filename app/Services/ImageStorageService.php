<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class ImageStorageService
{
    public function deleteImage(string $image_link)
    {
        if (Storage::disk('public')->exists($image_link)) {
            Storage::disk('public')->delete($image_link);
        }
    }
}
