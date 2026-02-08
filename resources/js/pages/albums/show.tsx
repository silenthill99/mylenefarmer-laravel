import PageLayout from '@/layout/page-layout';
import storage from '@/routes/storage';
import { Album } from '@/types';
import { usePage } from '@inertiajs/react';

const Show = () => {
    const { album } = usePage<{ album: Album }>().props;
    const tracklist: string[] = album.tracklist.split('\n');
    return (
        <PageLayout className={'container mx-auto text-[32px] text-white'}>
            <h1>Album {album.title}</h1>
            <div className={'mt-4 flex justify-between'}>
                <ul>
                    {tracklist.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
                <img className={'w-150'} src={storage.local(album.image_path).url} alt={album.title} />
            </div>
        </PageLayout>
    );
};

export default Show;
