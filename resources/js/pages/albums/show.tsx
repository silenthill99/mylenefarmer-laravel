import PageLayout from '@/layout/page-layout';
import storage from '@/routes/storage';
import { Album } from '@/types';
import { usePage } from '@inertiajs/react';
import DeezerLink from '@/components/deezer-link';
import { getAudioId } from '@/components/getAudioId';
import SpotifyLink from '@/components/spotify-link';
import AppleMusicLink from '@/components/apple-music-link';

const Show = () => {
    const { album } = usePage<{ album: Album }>().props;
    const tracklist: string[] = album.tracklist.split('\n');
    return (
        <PageLayout className={'container mx-auto text-[32px] text-white mb-20'}>
            <h1>Album {album.title}</h1>
            <div className={'my-4 flex justify-between'}>
                <ul>
                    {tracklist.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
                <div className={"relative group"}>
                    <img className={'w-150'} src={storage.local(album.image_path).url} alt={album.title} />
                    {album.coming_soon ? (
                        <p className={"absolute bg-white/75 p-5 text-black text-base bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}>Sortie prochainement</p>
                    ) : null}
                </div>
            </div>
            <div className={"space-y-10"}>
                <DeezerLink id={getAudioId(album.deezer_url)} />
                <SpotifyLink id={getAudioId(album.spotify_url)} />
                <AppleMusicLink id={getAudioId(album.apple_music_url)}/>
            </div>
        </PageLayout>
    );
};

export default Show;
