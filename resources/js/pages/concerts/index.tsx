import React from 'react';
import SidebarLayout from '@/layout/sidebar-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Concert } from '@/types';
import ConcertController from '@/actions/App/Http/Controllers/ConcertController';
import { Button } from '@/components/ui/button';
import { EditIcon, TrashIcon } from 'lucide-react';

const Index = () => {
    const { concerts } = usePage<{ concerts: Concert[] }>().props;
    return (
        <SidebarLayout>
            <Head title={'Concerts'} />
            <h1 className={'py-5 text-5xl font-bold'}>Liste des concerts</h1>
            <Link href={ConcertController.create()}>Ajouter un concert</Link>
            {concerts.length === 0 ? (
                <p>Aucun concerts renseignés actuellement</p>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Concert</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {concerts.map((concert) => (
                            <TableRow key={concert.id}>
                                <TableCell><Link href={ConcertController.show({concert: concert})}>{concert.name}</Link></TableCell>
                                <TableCell>
                                    <Button variant={'destructive'} onClick={() => router.delete(ConcertController.destroy.url({concert: concert}))}><TrashIcon/></Button>
                                    <Button variant={"ghost"} onClick={() => router.visit(ConcertController.edit.url({concert: concert}))}><EditIcon/></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </SidebarLayout>
    );
};

export default Index;
