import React from 'react';
import { Form, Head, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import registeredUser from '@/routes/registered-user';

type FormProps = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}

const Register = () => {

    const { data, setData } = useForm<Required<FormProps>>({
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
    });

    return (
        <>
            <Head title={"Créer un compte"}/>
            <main className={"container mx-auto min-h-screen flex items-center justify-center"}>
                <Form {...registeredUser.store.form()}>
                    {({errors}) => (
                        <>
                            <Label
                                htmlFor={"name"}
                            >
                                Votre nom
                            </Label>
                            <Input
                                type={"text"}
                                placeholder={"Votre nom"}
                                name={"name"}
                            />
                            {errors.name && (
                                <p className={"text-red-500"}>{errors.name}</p>
                            )}
                            <Label
                                htmlFor={"email"}
                                className={"mt-6"}
                            >
                                Email
                            </Label>
                            <Input
                                title={"email"}
                                id={"email"}
                                placeholder={"@"}
                                name={"email"}
                            />
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
                        </>
                    )}
                </Form>
            </main>
        </>
    );
};

export default Register;
