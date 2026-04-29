import PageLayout from '@/layout/page-layout';
import { Head, usePage } from '@inertiajs/react';
import { Concert } from '@/types';
import storage from '@/routes/storage';
import {Card, CardContent} from "@/components/ui/card";

export default function Show() {
    const {concert} = usePage<{concert: Concert}>().props;
    return (
        <PageLayout className={'flex flex-col items-center justify-center gap-8 px-4 py-10 text-white lg:flex-row lg:items-start lg:gap-12 lg:px-10'}>
            <Head>
                <title>En concert</title>
            </Head>
            <div className={'flex w-full max-w-md flex-col gap-6 pb-20 lg:max-w-xl lg:pb-0'}>
                <h1 className={'font-lobster text-5xl py-0! font-normal! drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] lg:text-7xl'}>{concert.name}</h1>
                {concert.alert_message && (
                    <Card>
                        <CardContent>
                            <p className={"text-red-500"}>{concert.alert_message}</p>
                        </CardContent>
                    </Card>
                )}
                <img src={storage.local(concert.affiche_path).url} alt={'Affiche de concert'} className={'w-full rounded-lg shadow-2xl shadow-black/50 lg:hidden'} />
                <section className={'rounded-xl bg-black/60 p-6 backdrop-blur-sm'}>
                    <h2 className={'mb-4 text-sm font-semibold uppercase tracking-widest text-white/70'}>Setlist</h2>
                    <ul className={'flex flex-col gap-1 text-lg lg:text-xl'}>
                        {concert.setlist.split('\n').map((song, i) => (
                            <li key={i}>{song}</li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className={'hidden flex-col gap-6 lg:flex'}>
                <img src={storage.local(concert.affiche_path).url} alt={'Affiche de concert'} width={500} className={'rounded-lg shadow-2xl shadow-black/50'} />
                <dl className={'flex flex-col gap-4 rounded-xl bg-black/60 p-6 backdrop-blur-sm'}>
                    <div>
                        <dt className={'text-sm font-semibold uppercase tracking-widest text-white/70'}>Lieu de captation</dt>
                        <dd className={'text-xl font-semibold'}>{concert.filmed_at}</dd>
                    </div>
                    <div className={"flex justify-between"}>
                        <div>
                            <dt className={'text-sm font-semibold uppercase tracking-widest text-white/70'}>Date de
                                début
                            </dt>
                            <dd className={'text-xl font-semibold'}>
                                {new Date(concert.start_date).toLocaleDateString(
                                    'fr-FR', {
                                        'year': 'numeric',
                                        'month': 'long',
                                        'day': 'numeric'
                                    }
                                )}
                            </dd>
                        </div>
                        <div>
                            <dt className={'text-sm font-semibold uppercase tracking-widest text-white/70'}>Date de
                                fin
                            </dt>
                            <dd className={'text-xl font-semibold'}>
                                {new Date(concert.end_date).toLocaleDateString(
                                    'fr-FR', {
                                        'year': 'numeric',
                                        'month': 'long',
                                        'day': 'numeric'
                                    }
                                )}
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </PageLayout>
    );
}
