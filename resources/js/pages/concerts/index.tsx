import React from 'react';
import SidebarLayout from '@/layout/sidebar-layout';
import { Head } from '@inertiajs/react';

const Index = () => {
    return (
        <SidebarLayout>
            <Head title={"Concerts"} />
            <h1 className={"text-5xl font-bold py-5"}>Liste des concerts</h1>
        </SidebarLayout>
    );
};

export default Index;
