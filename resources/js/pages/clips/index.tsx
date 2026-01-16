import { Button } from '@/components/ui/button';
import YoutubeVideos from '@/components/youtube-videos';
import PageLayout from '@/layout/page-layout';
import { SharedData } from '@/types';
import { Clips } from '@/types/clips';
import { router, usePage } from '@inertiajs/react';
import clips from '@/routes/clips';

const Index = () => {
    const { clipList } = usePage<{ clipList: Clips[] }>().props;
    const { auth } = usePage<SharedData>().props;
    return (
        <PageLayout className={'container mx-auto mt-5 flex flex-col items-start pb-20'}>
            {auth.user?.role?.slug === 'admin' && <Button onClick={() => router.visit(clips.create())}>Ajouter une video</Button>}
            <div className={'flex w-full grow flex-col items-center justify-center'}>
                {clipList.map((clip) => (
                    <div key={clip.id} className={'text-center'}>
                        <h2 className={'text-2xl text-red-500'}>{clip.title}</h2>
                        <YoutubeVideos id={
                            clip.url
                                .replace('https://www.youtube.com/watch?v=', '')
                                .replace('https://youtu.be/', '')}
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};

export default Index;
