import React, { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = PropsWithChildren<{
    title: string;
}>

const AuthenticatedLayout = ({children, title}: Props) => {
    return (
        <main className={"flex min-h-screen items-center justify-center bg-[url('/assets/images/background.jpg')] bg-cover bg-fixed bg-center"}>
            <Card className={'w-1/2'}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </main>
    );
};

export default AuthenticatedLayout;
