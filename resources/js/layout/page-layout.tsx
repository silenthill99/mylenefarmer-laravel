import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { dashboard, home, login, logout } from '@/routes';
import registeredUser from '@/routes/registered-user';
import clips from '@/routes/clips';
import { cn } from '@/lib/utils';
import AlbumController from '@/actions/App/Http/Controllers/AlbumController';

const NavItemButton = [
    {name: "Page d'accueil", link: home},
    {name: "Clips", link: clips.index}
]

const PageLayout = ({ children, className, ...props}: PropsWithChildren<HTMLAttributes<HTMLElement> & {className?: string}>) => {
    const { auth, albums } = usePage<SharedData>().props;

    const {url} = usePage();

    const isActive = (link: string) => {
        if (link === "/") {
            return url === "/"
        }
        return url.startsWith(link);
    }

    return (
        <div className={'flex min-h-screen flex-col bg-[url("/assets/images/background.jpg")] bg-cover bg-fixed bg-center bg-no-repeat'} {...props}>
            <header className={'border-b border-black bg-white p-5'}>
                <nav className={'container mx-auto flex justify-between'}>
                    {auth.user ? (
                        <ul className={'flex gap-5'}>
                            <li>
                                <Link href={dashboard()}>Tableau de bord</Link>
                            </li>
                            <li>
                                <Link href={logout()} method={'post'}>
                                    Se déconnecter
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className={'flex gap-5'}>
                            <li>
                                <Link href={login()}>Se connecter</Link>
                            </li>
                            <li>
                                <Link href={registeredUser.create()}>Créer un compte</Link>
                            </li>
                        </ul>
                    )}
                    <ul className={'flex gap-2'}>
                        {NavItemButton.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link.url()} className={isActive(link.link.url()) ? 'underline' : ''}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <div className={'group relative'}>
                            <span className={'cursor-pointer'}>Albums</span>
                            <ul className={'absolute left-1/2 hidden w-50 -translate-x-1/2 border bg-white text-center group-hover:block'}>
                                {albums.length === 0 ? (
                                    <p>Aucun album enregistrés en base de données</p>
                                ) : (
                                    albums.map((album, index) => (
                                        <li key={index}>
                                            <Link href={AlbumController.show({album: album})}>Album {album.title}</Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </ul>
                </nav>
            </header>
            <main className={cn('grow', className)}>{children}</main>
        </div>
    );
};
export default PageLayout;
