<?php

use App\Enums\RoleEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Mettre à jour les données existantes pour correspondre aux nouvelles valeurs
        DB::table('roles')->whereNotIn('name', [RoleEnum::DEFAULT->value, RoleEnum::ADMIN->value])
            ->update(['name' => RoleEnum::DEFAULT->value]);

        Schema::table('roles', function (Blueprint $table) {
            $table->enum('name', array_column(RoleEnum::cases(), 'value'))->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->string('name')->unique();
        });
    }
};
