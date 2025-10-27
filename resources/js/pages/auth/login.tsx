import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import loginUser from '@/routes/login-user';
import { home } from '@/routes';

type LoginProps = {
    email: string;
    password: string;
}

const Login = () => {
    const {data, setData, errors, post} = useForm<Required<LoginProps>>({
        email: "",
        password: ""
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(loginUser.store().url)
    }

    return (
        <div className={"flex justify-center items-center min-h-screen bg-[url('/assets/images/background.jpg')] bg-center bg-fixed bg-cover"}>
            <Head title={"Login"}/>
            <Card className={"w-1/2"}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor={'mail'}>Adresse mail</Label>
                        <Input type={'email'} id={'mail'} placeholder={'@'} value={data.email}
                               onChange={e => setData('email', e.target.value)} />
                        {errors.email && (
                            <p className={'text-red-600'}>{errors.email}</p>
                        )}
                        <Label htmlFor={'password'} className={'mt-6'}>Mot de passe</Label>
                        <Input type={'password'} id={'password'} placeholder={'Mot de passe'} value={data.password}
                               onChange={e => setData('password', e.target.value)} />
                        {errors.password && (
                            <p className={'text-red-600'}>{errors.password}</p>
                        )}
                        <Button className={'mt-6'}>Valider</Button>
                    </form>
                    <Link className={"font-sans text-cyan-700 hover:underline selection:bg-black selection:text-white"} href={home()}>Retour à l'accueil</Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
