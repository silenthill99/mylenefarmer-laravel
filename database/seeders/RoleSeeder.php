<?php

	namespace Database\Seeders;

	use App\Models\Role;
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Str;

    class RoleSeeder extends Seeder
	{
		public function run(): void
		{
            $guest = "Guest";
            $admin = "Admin";
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
			DB::table('roles')->truncate();
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            DB::table('roles')->insert([
                [
                    'name' => $guest,
                    'slug' => Str::slug($guest),
                    'created_at' => now(),
                    'updated_at' => now()
                ],
                [
                    'name' => $admin,
                    'slug' => Str::slug($admin),
                    'created_at' => now(),
                    'updated_at' => now()
                ]
            ]);
		}
	}
