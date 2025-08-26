import React from 'react';
import PageLayout from '@/layout/page-layout';
import { usePage } from '@inertiajs/react';
import { Clips } from '@/types/clips';

const Index = () => {
    const { clips } = usePage<{clips: Clips[]}>().props;
    return (
        <PageLayout>
            {clips.map(clip => (
                <h2>{clip.title}</h2>
            ))}
        </PageLayout>
    );
};

export default Index;
