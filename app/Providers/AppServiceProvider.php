<?php

namespace App\Providers;

use App\Enums\RoleEnum;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
        Gate::define('isAdmin', function ($user) {
            return $user->role->name === RoleEnum::ADMIN->value;
        });
    }
}
