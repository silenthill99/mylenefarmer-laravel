import React, { PropsWithChildren } from 'react';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';

const SidebarLayout = ({children}: PropsWithChildren) => {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <SidebarTrigger/>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default SidebarLayout;
