<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('albums', function (Blueprint $table) {
            $table->string("deezer_url")->nullable()->change();
            $table->string("apple_music_url")->nullable()->change();
            $table->string("spotify_url")->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('albums', function (Blueprint $table) {
            $table->string("deezer_url")->nullable(false)->change();
            $table->string("apple_music_url")->nullable(false)->change();
            $table->string("spotify_url")->nullable(false)->change();
        });
    }
};
