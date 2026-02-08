import React, { useEffect } from 'react';
import { Form, Head, usePage } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import password from '@/routes/password';
import AuthenticatedLayout from '@/layout/AuthenticatedLayout';
import { Toaster } from '@/components/ui/sonner';
import { SharedData } from '@/types';
import { toast } from 'sonner';

const ForgotPassword = () => {
    const { flash } = usePage<SharedData>().props;

    useEffect(() => {
        if (!flash.success) return;
        toast.success(flash.success);
    }, [flash.success]);

    return (
        <AuthenticatedLayout title={'Réinitialiser le mot de passe'}>
            <Toaster position={"top-center"} toastOptions={{className: "border-2"}}/>
            <Head title={'Mot de passe oublié'} />
            <Form {...password.email.form()}>
                {({ errors, processing }) => (
                    <div className={'space-y-4'}>
                        <div>
                            <Label htmlFor={'email'}>Votre adresse mail</Label>
                            <Input type={'email'} autoComplete={'email'} name={'email'} id="email" placeholder={'Email'} />
                            {errors.email && <p className={'text-red-600'}>{errors.email}</p>}
                        </div>
                        <Button disabled={processing}>Renvoyer l'email</Button>
                    </div>
                )}
            </Form>
        </AuthenticatedLayout>
    );
};

export default ForgotPassword;
