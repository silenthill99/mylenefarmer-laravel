import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MenuNav, SharedData } from '@/types';
import { dashboard, home, login, logout } from '@/routes';
import registeredUser from '@/routes/registered-user';
import clips from '@/routes/clips';
import { cn } from '@/lib/utils';
import AlbumController from '@/actions/App/Http/Controllers/AlbumController';
import NavMenuDesktop from '@/components/nav-menu-desktop';

const PageLayout = ({ children, className, ...props}: PropsWithChildren<HTMLAttributes<HTMLElement> & {className?: string}>) => {
    const { auth, albums } = usePage<SharedData>().props;

    const NavItemButton: MenuNav[] = [
        { name: "Page d'accueil", link: home.url() },
        { name: 'Clips', link: clips.index.url() },
        {
            name: 'Albums',
            isDropdown: true,
            children: albums.map((album) => ({
                name: album.title,
                link: AlbumController.show.url({ album: album }),
            })),
        },
    ];



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
                    <NavMenuDesktop NavItemButton={NavItemButton}/>
                </nav>
            </header>
            <main className={cn('grow', className)}>{children}</main>
        </div>
    );
};
export default PageLayout;
