import React from 'react';
import { Form, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import password from '@/routes/password';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ResetPassword = () => {

    const {token, email} = usePage<{token: string, email: string}>().props;

    return (
        <div className={"flex min-h-screen items-center justify-center bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed bg-center"}>
            <Card className={"w-1/2"}>
                <CardHeader>
                    <CardTitle>Changer de mot de passe</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...password.update.form()}>
                        {({errors}) => (
                            <div className={"space-y-4"}>
                                {errors.token && <p className={"text-red-500"}>{errors.token}</p>}
                                {errors.email && <p className={"text-red-500"}>{errors.email}</p>}
                                <input name={"token"} type={"hidden"} value={token}/>
                                <input name={"email"} type={"hidden"} value={email}/>
                                <div>
                                    <Label htmlFor={'password'}>Nouveau mot de passe</Label>
                                    <Input
                                        type="password"
                                        id={'password'}
                                        name={'password'}
                                        placeholder={'Password'}
                                    />
                                    {errors.password && <p className={"text-red-500"}>{errors.password}</p>}
                                </div>
                                <div>
                                    <Label htmlFor={'password_confirmation'}>Confirmer le nouveau mot de passe</Label>
                                    <Input
                                        type="password"
                                        id={'password_confirmation'}
                                        name={'password_confirmation'}
                                        placeholder={'Password confirmation'}
                                    />
                                    {errors.password_confirmation && <p className={"text-red-500"}>{errors.password_confirmation}</p>}
                                </div>
                                <Button>Valider</Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResetPassword;
