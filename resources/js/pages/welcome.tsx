import { Head } from '@inertiajs/react';
import PageLayout from '@/layout/page-layout';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <PageLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className={"text-white text-[32px] container mx-auto"}>
                <p>Essai</p>
                <Button>Essai</Button>
            </div>
        </PageLayout>
    );
}
