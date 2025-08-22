<?php

	namespace App\Policies;

	use App\Models\User;
    use Illuminate\Auth\Access\HandlesAuthorization;

    class RolePolicy
	{
		use HandlesAuthorization;

        public function admin (User $user): bool
        {
            return optional($user->role)->slug === 'admin';
        }
	}
