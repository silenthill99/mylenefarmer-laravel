import React, { FormEvent } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type FormProps = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}

const Register = () => {

    const {data, setData, post, reset, errors} = useForm<Required<FormProps>>({
        email: "",
        name: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('registered-user.store'))
    }

    return (
        <>
            <Head title={"Créer un compte"}/>
            <main className={"container mx-auto min-h-screen flex items-center justify-center"}>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor={"name"}>Votre nom</Label>
                    <Input type={"text"} placeholder={"Votre nom"} value={data.name} onChange={e => setData("name", e.target.value)}/>
                    {errors.name && (
                        <p className={"text-red-500"}>{errors.name}</p>
                    )}

                    <Label htmlFor={"email"} className={"mt-6"}>Email</Label>
                    <Input title={"email"} id={"email"} placeholder={"@"} value={data.email} onChange={e => setData('email', e.target.value)}/>
                    {errors.email && (
                        <p className={"text-red-500"}>{errors.email}</p>
                    )}

                    <Label htmlFor={"password"} className={"mt-6"}>Mot de passe</Label>
                    <Input type={"password"} id={"password"} placeholder={"Mot de passe"} value={data.password} onChange={e => setData('password', e.target.value)}/>
                    {errors.password && (
                        <p className={"text-red-500"}>{errors.password}</p>
                    )}

                    <Label htmlFor={"password_confirmation"} className={"mt-6"}>Confirmez le mot de passe</Label>
                    <Input type={"password"} id={"password_confirmation"} placeholder={"Confirmez le mot de passe"} value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}/>
                    {errors.password_confirmation && (
                        <p className={"text-red-500"}>{errors.password_confirmation}</p>
                    )}
                    <br/>
                    <Button type={"submit"} color={"green"}>Créer un compte</Button>
                </form>
            </main>
        </>
    );
};

export default Register;
