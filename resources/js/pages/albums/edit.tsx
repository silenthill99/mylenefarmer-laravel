import InputError from '@/components/input-error';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageLayout from '@/layout/page-layout';
import albums from '@/routes/albums';
import storage from '@/routes/storage';
import { Album } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';
import { Label } from '@radix-ui/react-label';
import { ChangeEvent, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const Edit = () => {
    const { album } = usePage<{ album: Album }>().props;
    const [preview, setPreview] = useState<string | null>(storage.local(album.image_path).url);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }

    return (
        <PageLayout className={'flex items-center justify-center py-20'}>
            <Head title={"Modifier l'album " + album.title} />
            <Card className={'w-1/2'}>
                <CardHeader>
                    <CardTitle>Modifier l'album {album.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...albums.update.form.patch({ album: album })}>
                        {({ errors, processing }) => (
                            <div className={'space-y-4'}>
                                <div>
                                    <Label htmlFor={'title'}>Titre de l'album</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        defaultValue={album.title}
                                        placeholder={"Titre de l'album"}
                                        aria-invalid={!!errors.title}
                                    />
                                    <InputError message={errors.title} />
                                </div>
                                <div>
                                    <Label htmlFor={'image'}>Image de l'album</Label>
                                    <Input
                                        type={'file'}
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                        aria-invalid={!!errors.image}
                                    />
                                    {preview && <img src={preview} alt={'Preview'} className={'rounded-md'} width={100} />}
                                    <InputError message={errors.image} />
                                </div>
                                <div>
                                    <Label htmlFor={'tracklist'}>Liste des titres</Label>
                                    <Textarea
                                        id={'tracklist'}
                                        name={'tracklist'}
                                        className={'resize-none'}
                                        aria-invalid={!!errors.tracklist}
                                        defaultValue={album.tracklist}
                                    />
                                    <InputError message={errors.tracklist}/>
                                </div>
                                <div>
                                    <Label htmlFor={"deezer_url"}>Lien Deezer</Label>
                                    <Input
                                        type={"url"}
                                        id={"deezer_url"}
                                        name={"deezer_url"}
                                        placeholder={"Deezer"}
                                        defaultValue={album.deezer_url}
                                        aria-invalid={!!errors.deezer_url}
                                    />
                                    <InputError message={errors.deezer_url}/>
                                </div>
                                <div>
                                    <Label htmlFor={"spotify_url"}>Lien Spotify</Label>
                                    <Input
                                        type={"url"}
                                        id={"spotify_url"}
                                        name={"spotify_url"}
                                        placeholder={"Spotify"}
                                        defaultValue={album.spotify_url}
                                        aria-invalid={!!errors.spotify_url}
                                    />
                                    <InputError message={errors.spotify_url}/>
                                </div>
                                <div>
                                    <Label htmlFor={'apple_music_url'}>Lien Apple music</Label>
                                    <Input
                                        type={"url"}
                                        id={"apple_music_url"}
                                        name={"apple_music_url"}
                                        placeholder={"Apple Music"}
                                        defaultValue={album.apple_music_url}
                                        aria-invalid={!!errors.apple_music_url}
                                    />
                                    <InputError message={errors.apple_music_url}/>
                                </div>
                                <div className={"flex gap-2 items-center"}>
                                    <Input type={"hidden"} name={'coming_soon'} value={0}/>
                                    <Checkbox id={"coming_soon"} name={'coming_soon'} value={1} defaultChecked={album.coming_soon}/>
                                    <Label htmlFor={"coming_soon"}>Sortie à venir</Label>
                                </div>
                                <Button disabled={processing}>Modifier l'album</Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </PageLayout>
    );
};

export default Edit;
