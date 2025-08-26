import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const NavItemButton = [
    {name: "Page d'accueil", link: "home"},
    {name: "Clips", link: "clips.index"}
]

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
                                <Link href={route("dashboard")}>Tableau de bord</Link>
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
                    <ul className={"flex gap-2"}>
                        {NavItemButton.map((link, index) => (
                            <li key={index}>
                                <Link href={route(link.link)} className={route().current(link.link) ? "underline" : ""}>{link.name}</Link>
                            </li>
                        ))}
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
