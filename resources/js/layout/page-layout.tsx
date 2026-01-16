import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { dashboard, home, login, logout } from '@/routes';
import registeredUser from '@/routes/registered-user';
import clips from '@/routes/clips';
import { cn } from '@/lib/utils';

const NavItemButton = [
    {name: "Page d'accueil", link: home},
    {name: "Clips", link: clips.index}
]

const PageLayout = ({ children, className, ...props}: PropsWithChildren<HTMLAttributes<HTMLElement> & {className?: string}>) => {
    const { auth } = usePage<SharedData>().props;

    const {url} = usePage();

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/"
        }
        return url.startsWith(link);
    }

    return (
        <div
            className={'min-h-screen bg-[url("/assets/images/background.jpg")] bg-no-repeat bg-fixed bg-cover bg-center flex flex-col'} {...props}>
            <header className={'border-b border-black p-5 bg-white'}>
                <nav className={'container mx-auto flex justify-between'}>
                    {auth.user ? (
                        <ul className={"flex gap-5"}>
                            <li>
                                <Link href={dashboard()}>Tableau de bord</Link>
                            </li>
                            <li>
                                <Link href={logout()} method={"post"}>Se déconnecter</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className={'flex gap-5'}>
                            <li><Link href={login()}>Se connecter</Link></li>
                            <li><Link href={registeredUser.create()}>Créer un compte</Link></li>
                        </ul>
                    )}
                    <ul className={"flex gap-2"}>
                        {NavItemButton.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link.url()} className={isActive(link.link.url()) ? "underline" : ""}>{link.name}</Link>
                            </li>
                        ))}
                        <div className={"relative group"}>
                            <span className={"cursor-pointer"}>Albums</span>
                            <ul className={"absolute w-50 left-1/2 -translate-x-1/2 text-center bg-white border hidden group-hover:block"}>
                                <li>Album Cendres de lune</li>
                                <li>Album Ainsi soit je</li>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </header>
            <main className={cn("grow", className)}>
                {children}
            </main>
        </div>
    );
};
export default PageLayout;
