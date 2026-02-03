import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import registeredUser from '@/routes/registered-user';
import { Form, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/layout/AuthenticatedLayout';

const Register = () => {
    return (
        <AuthenticatedLayout title={'Créer un compte'}>
            <Head title={'Créer un compte'} />
            <Form {...registeredUser.store.form()}>
                {({ errors }) => (
                    <div className={'space-y-4'}>
                        <div>
                            <Label htmlFor={'name'}>Votre nom</Label>
                            <Input type={'text'} placeholder={'Votre nom'} name={'name'} id={'name'} />
                            {errors.name && <p className={'text-red-500'}>{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor={'email'}>Email</Label>
                            <Input type={'email'} id={'email'} placeholder={'@'} name={'email'} />
                            {errors.email && <p className={'text-red-500'}>{errors.email}</p>}
                        </div>

                        <div>
                            <Label htmlFor={'password'}>Mot de passe</Label>
                            <Input type={'password'} id={'password'} name={'password'} placeholder={'Mot de passe'} />
                            {errors.password && <p className={'text-red-500'}>{errors.password}</p>}
                        </div>

                        <div>
                            <Label htmlFor={'password_confirmation'} className={'mt-6'}>
                                Confirmez le mot de passe
                            </Label>
                            <Input
                                type={'password'}
                                id={'password_confirmation'}
                                name={'password_confirmation'}
                                placeholder={'Confirmez le mot de passe'}
                            />
                            {errors.password_confirmation && <p className={'text-red-500'}>{errors.password_confirmation}</p>}
                        </div>
                        <Button type={'submit'} color={'green'}>
                            Créer un compte
                        </Button>
                    </div>
                )}
            </Form>
        </AuthenticatedLayout>
    );
};

export default Register;
