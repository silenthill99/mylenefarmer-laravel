import React from 'react';
import { Form, Head, Link } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import loginUser from '@/routes/login-user';
import { home } from '@/routes';
import { Checkbox } from '@/components/ui/checkbox';
const Login = () => {

    return (
        <div className={"flex justify-center items-center min-h-screen bg-[url('/assets/images/background.jpg')] bg-center bg-fixed bg-cover"}>
            <Head title={"Login"}/>
            <Card className={"w-1/2"}>
                <CardContent>
                    <Form {...loginUser.store.form()}>
                        {({errors}) => (
                            <div className={"space-y-6"}>
                                <div>
                                    <Label
                                        htmlFor={'mail'}>Adresse mail</Label>
                                    <Input
                                        type={'email'}
                                        id={'mail'} placeholder={'@'} name={"email"}
                                    />
                                    {errors.email && (
                                        <p className={'text-red-600'}>{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor={'password'}>Mot de passe</Label>
                                    <Input
                                        type={'password'}
                                        id={'password'}
                                        placeholder={'Mot de passe'}
                                        name={'password'}
                                    />
                                    {errors.password && (
                                        <p className={'text-red-600'}>{errors.password}</p>
                                    )}
                                </div>
                                <div className={"flex items-center"}>
                                    <Checkbox id={"remember"} name={"remember"} value={1}/>
                                    <Label htmlFor={"remember"}>Remember me</Label>
                                </div>
                                <Button>Valider</Button>
                            </div>
                        )}
                    </Form>
                    <Link className={"font-sans text-cyan-700 hover:underline selection:bg-black selection:text-white"} href={home()}>Retour à l'accueil</Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
