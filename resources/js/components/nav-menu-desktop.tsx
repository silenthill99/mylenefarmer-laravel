import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MenuNav } from '@/types';
import { cn } from '@/lib/utils';

type Props = {
    NavItemButton: MenuNav[]
}

const NavMenuDesktop = ({NavItemButton}: Props) => {
    const { url } = usePage();
    const isActive = (link: string) => {
        if (link === '/') {
            return url === '/';
        }
        return url.startsWith(link);
    };
    return (
        <ul className={'hidden md:flex gap-2'}>
            {NavItemButton.map((item, index) => (
                <li key={index}>
                    {item.isDropdown ? (
                        <div className={'group relative flex flex-col items-center'}>
                            <span className={'cursor-pointer'}>{item.name}</span>
                            <ul className={'absolute hidden w-50 border bg-white text-center group-hover:block top-5'}>
                                {item.children?.length === 0 ? (
                                    <p>Aucun album enregistrés en base de données</p>
                                ) : (
                                    item.children?.map((child, childIndex) => (
                                        <li key={childIndex}>
                                            <Link href={child.link} className={"inline-block w-full"}>
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    ) : (
                        <Link href={item.link} className={cn(isActive(item.link!) && 'underline')}>
                            {item.name}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenuDesktop;
