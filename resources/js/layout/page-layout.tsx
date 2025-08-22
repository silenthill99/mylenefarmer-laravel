import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const PageLayout = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    const { auth } = usePage<SharedData>().props;
    return (
        <div
            className={'min-h-screen bg-[url("/assets/images/background.jpg")] bg-no-repeat bg-fixed bg-cover bg-center flex flex-col'} {...props}>
            <header className={'border-b border-black p-5 bg-white'}>
                <nav className={'container mx-auto flex justify-between'}>
                    {auth.user ? (
                        <ul className={"flex gap-5"}>
                            <li>
                                <Link href={""}>Tableau de bord</Link>
                            </li>
                            <li>
                                <Link href={route("logout")} method={"post"}>Se déconnecter</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className={'flex gap-5'}>
                            <li><Link href={route('login-user.create')}>Se connecter</Link></li>
                            <li><Link href={route('registered-user.create')}>Créer un compte</Link></li>
                        </ul>
                    )}
                    <ul>
                        <li>
                            <Link href={route('home')}>Page d'accueil</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={"grow"}>
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
