import React, { useEffect } from 'react';
import SidebarLayout from '@/layout/sidebar-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SquarePenIcon, TrashIcon } from 'lucide-react';
import AlbumController from '@/actions/App/Http/Controllers/AlbumController';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const Index = () => {
    const {albums, flash} = usePage<SharedData>().props

    useEffect(() => {
        if (!flash.success) return;
        toast.success(flash.success);
    }, [flash.success]);

    return (
        <SidebarLayout>
            <Toaster position={'top-center'}/>
            <h1 className={'py-5 text-5xl font-bold'}>Liste des albums</h1>
            <Button className={'w-min'} onClick={() => router.visit(AlbumController.create())}>
                Ajouter un album
            </Button>
            {albums.length === 0 ? (
                <p>Aucun albums enregistrés en base de données</p>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Titre de l'album</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {albums.map((album) => (
                            <TableRow key={album.id}>
                                <TableCell>
                                    <Link href={AlbumController.show({album: album})} className={"hover:underline"}>{album.title}</Link>
                                </TableCell>
                                <TableCell>
                                    <Button variant={'destructive'} onClick={() => router.delete(AlbumController.destroy({album: album}))}>
                                        <TrashIcon />
                                    </Button>
                                    <Button variant={"ghost"}>
                                        <SquarePenIcon/>
                                    </Button>
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
