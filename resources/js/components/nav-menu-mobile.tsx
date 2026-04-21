import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { MenuNav } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

type Props = {
    NavItemButton: MenuNav[]
}

const NavMenuMobile = ({NavItemButton}: Props) => {
    const [view, setView] = useState(false);
    return (
        <div className={'md:hidden'}>
            <Button
                variant={'ghost'}
                onClick={() => {
                    setView(true);
                }}
            >
                <MenuIcon />
            </Button>
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
                    view ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                onClick={() => setView(false)}
            />
            <div className={view ? 'fixed top-0 right-0 bottom-0 left-1/2 z-50 bg-white' : 'hidden'}>
                <Button variant={'ghost'} className={'relative left-full -translate-x-full'} onClick={() => setView(false)}>
                    <XIcon />
                </Button>
                <ul>
                    {NavItemButton.map((item: MenuNav) =>
                        item.isDropdown ? (
                            <Accordion type={'single'} collapsible key={item.name}>
                                <AccordionItem value={'clips'}>
                                    <AccordionTrigger>{item.name}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul>
                                            {item.children?.map((child: MenuNav) => (
                                                <li key={child.name}>
                                                    <Link href={child.link}>{child.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ) : (
                            <li className={'text-sm'} key={item.name}>{item.name}</li>
                        ),
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavMenuMobile;
