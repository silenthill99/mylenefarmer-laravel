import PageLayout from '@/layout/page-layout';
import { Head, usePage } from '@inertiajs/react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SharedData } from '@/types';
import storage from '@/routes/storage';

export default function Welcome() {
    const { albums } = usePage<SharedData>().props
    return (
        <PageLayout className={'flex items-center justify-center gap-10 text-[32px] text-white'}>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <p className={'w-100'}>
                Bonjour à tous, je m'appelle Florian, j'ai créé ce site pour vous en dire un peu plus sur mon idole, Mylène Farmer. Je suis fan d'elle
                depuis que j'ai découvert le Mylènium tour en été 2012 même si je la connais depuis décembre 2006. Vous trouverez sur ce site tous les
                albums et concerts de la star avec les chansons associées à chaque titres. N'hésitez pas à vous inscrire, l'inscription est gratuite !
            </p>
            <Carousel className={'w-150'}>
                <CarouselContent>
                    {albums.map((album) => (
                        <CarouselItem key={album.id}>
                            <img className={"h-full w-full object-cover"} src={storage.local(album.image_path).url} alt={album.title} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={'text-black'} />
                <CarouselNext className={'text-black'} />
            </Carousel>
        </PageLayout>
    );
}
