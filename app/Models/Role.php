<?php /** @noinspection PhpParamsInspection */

    namespace App\Models;

	use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\HasMany;
    use Illuminate\Support\Str;

    class Role extends Model
	{
        protected $fillable = [
            "name"
        ];

        protected static function booted(): void
        {
            static::creating(function (Role $role) {
                $role->slug = Str::slug($role->name);
            });
        }

        public function getRouteKeyName(): string
        {
            return 'slug';
        }

        public function users(): HasMany
        {
            return $this->hasMany(User::class);
        }
    }
