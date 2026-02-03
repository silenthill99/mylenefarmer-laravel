import React from 'react';
import { Form, Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import password from '@/routes/password';

const ForgotPassword = () => {
    return (
        <div className={"flex min-h-screen items-center justify-center bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed bg-center"}>
            <Head title={'Mot de passe oublié'} />
            <Card className={'w-1/2'}>
                <CardHeader>
                    <CardTitle>Mot de passe oublié</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...password.email.form()}>
                        {({ errors, processing }) => (
                            <div className={"space-y-4"}>
                                <div>
                                    <Label htmlFor={'email'}>Votre adresse mail</Label>
                                    <Input type={'email'} autoComplete={'email'} name={'email'} id="email" placeholder={'Email'} />
                                    {errors.email && <p className={'text-red-600'}>{errors.email}</p>}
                                </div>
                                <Button disabled={processing}>Renvoyer l'email</Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ForgotPassword;
