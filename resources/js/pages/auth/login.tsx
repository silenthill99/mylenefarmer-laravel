import React from 'react';
import { Form, Head, Link } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import loginUser from '@/routes/login-user';
import { home } from '@/routes';
import { Checkbox } from '@/components/ui/checkbox';
import password from '@/routes/password';
import AuthenticatedLayout from '@/layout/AuthenticatedLayout';
const Login = () => {

    return (
        <AuthenticatedLayout title={'Se connecter'}>
            <Head title={'Login'} />
            <Form {...loginUser.store.form()} resetOnError={['password']}>
                {({ errors }) => (
                    <div className={'space-y-6'}>
                        <div>
                            <Label htmlFor={'mail'}>Adresse mail</Label>
                            <Input type={'email'} id={'mail'} placeholder={'@'} name={'email'} />
                            {errors.email && <p className={'text-red-600'}>{errors.email}</p>}
                        </div>
                        <div>
                            <Label htmlFor={'password'}>Mot de passe</Label>
                            <Input type={'password'} id={'password'} placeholder={'Mot de passe'} name={'password'} />
                            {errors.password && <p className={'text-red-600'}>{errors.password}</p>}
                        </div>
                        <div className={'flex items-center'}>
                            <Checkbox id={'remember'} name={'remember'} value={1} />
                            <Label htmlFor={'remember'}>Remember me</Label>
                        </div>
                        {errors.failure && <p className={'text-red-500'}>{errors.failure}</p>}
                        <Button>Valider</Button>
                    </div>
                )}
            </Form>
            <Link className={'font-sans text-cyan-700 selection:bg-black selection:text-white hover:underline'} href={home()}>
                Retour à l'accueil
            </Link>
            <Link className={'block font-sans text-cyan-700 hover:underline'} href={password.request()}>
                Mot de passe oublié ?
            </Link>
        </AuthenticatedLayout>
    );
};

export default Login;
