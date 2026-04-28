import React from 'react';
import SidebarLayout from '@/layout/sidebar-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SharedData } from '@/types';
import ConcertController from '@/actions/App/Http/Controllers/ConcertController';

const Index = () => {
    const {concerts} = usePage<SharedData>().props;
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
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {concerts.map((concert) => (
                            <TableRow key={concert.id}>
                                <TableCell><Link href={ConcertController.show({concert: concert})}>{concert.name}</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </SidebarLayout>
    );
};

export default Index;
