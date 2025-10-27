import React from 'react';
import PageLayout from '@/layout/page-layout';
import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon } from 'lucide-react';
import clips from '@/routes/clips';

const Create = () => {
    return (
        <PageLayout className={"flex flex-col items-center justify-center"}>
            <Form className={"w-200"} {...clips.store.form()}>
                {({errors, processing}) => (
                    <div className="space-y-4 bg-white p-5 rounded-md shadow">
                        <div>
                            <Label htmlFor={"title"}>Titre de la vidéo</Label>
                            <Input
                                type="text"
                                id={"title"}
                                name={"title"}
                                placeholder={"Titre"}
                            />
                            {errors.title && (
                                <span className="text-red-600">{errors.title}</span>
                            )}
                        </div>
                        <div>
                            <Label htmlFor={"link"}>Lien de la vidéo</Label>
                            <Input
                                type="text"
                                id={"link"}
                                name={"url"}
                                placeholder={"URL de la vidéo"}
                            />
                            {errors.url && (
                                <span className="text-red-600">{errors.url}</span>
                            )}
                        </div>
                        <Button>
                            <span>Envoyer</span>
                            {processing && (
                                <LoaderCircleIcon className={"animate-spin"}/>
                            )}
                        </Button>
                    </div>
                )}
            </Form>
        </PageLayout>
    );
};

export default Create;
