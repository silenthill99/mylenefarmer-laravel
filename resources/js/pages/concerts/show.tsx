import PageLayout from '@/layout/page-layout';
import { Head, usePage } from '@inertiajs/react';
import { Concert } from '@/types';
import storage from '@/routes/storage';

export default function Show() {
    const {concert} = usePage<{concert: Concert}>().props;
    return (
        <PageLayout className={'flex items-center justify-center gap-10 text-xl text-white lg:text-3xl'}>
            <Head>
                <title>En concert</title>
            </Head>
            <div className={'pb-20 lg:pb-0'}>
                <h1>{concert.name}</h1>
                <img src={storage.local(concert.affiche_path).url} alt={'Affiche de concert'} className={'w-full lg:hidden'} />
                <ul>
                    {concert.setlist.split('\n').map((song, i) => (
                        <li key={i}>{song}</li>
                    ))}
                </ul>
            </div>
            <div className={'hidden lg:block'}>
                <img src={storage.local(concert.affiche_path).url} alt={'Affiche de concert'} width={500} />
                <p>Lieu de captation : {concert.filmed_at}</p>
                <p>Date de début : {new Date(concert.start_date).toLocaleDateString(
                    "fr-FR", {
                        "year": "numeric",
                        "month": "long",
                        "day": "numeric",
                    }
                )}</p>
            </div>
        </PageLayout>
    );
}
