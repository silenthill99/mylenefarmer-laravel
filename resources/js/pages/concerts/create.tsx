import React, { ChangeEvent, useState } from 'react';
import PageLayout from '@/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@inertiajs/react';
import ConcertController from '@/actions/App/Http/Controllers/ConcertController';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Create = () => {
    const [view, setView] = useState<string | null>(null)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files?.[0]
        if (files) {
            setView(URL.createObjectURL(files));
        }
    }

    return (
        <PageLayout className={'flex items-center justify-center'}>
            <Card className={'w-1/2'}>
                <CardHeader>
                    <CardTitle>Ajouter un concert</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...ConcertController.store.form()}>
                        {({ errors, processing }) => (
                            <div className={'space-y-4'}>
                                <div>
                                    <Label htmlFor="name">Nom du concert</Label>
                                    <Input id={'name'} name={'name'} />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <Label htmlFor={'affiche'}>Affiche du concert</Label>
                                    <Input type={'file'} name={'affiche'} id={'affiche'} accept={'image/*'} onChange={handleChange} />
                                    {view && <img src={view} alt={'Visuel'} width={200} className={'rounded-3xl'} />}
                                    <InputError message={errors.affiche} />
                                </div>
                                <div>
                                    <Label htmlFor={'setlist'}>Liste des chansons</Label>
                                    <Textarea name={'setlist'} id={'setlist'} className={'min-h-50 resize-none'} />
                                    <InputError message={errors.setlist} />
                                </div>
                                <div>
                                    <Label htmlFor={'start_date'}>Date de début</Label>
                                    <Input type={"date"} id={"start_date"} name={'start_date'} />
                                    <InputError message={errors.start_date}/>
                                </div>
                                <div>
                                    <Label htmlFor={"end_date"}>Date de fin</Label>
                                    <Input type={"date"} id={"end_date"} name={'end_date'} />
                                    <InputError message={errors.end_date}/>
                                </div>
                                <div>
                                    <Label htmlFor={"alert_message"}>Message d'alerte</Label>
                                    <Input name={"alert_message"} id={'alert_message'} />
                                    <InputError message={errors.alert_message}/>
                                </div>
                                <div>
                                    <Label htmlFor={"filmed_at"}>Lieu de captation</Label>
                                    <Input name={'filmed_at'} id={'filmed_at'} />
                                    <InputError message={errors.filmed_at}/>
                                </div>
                                <Button disabled={processing}>Valider</Button>
                            </div>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </PageLayout>
    );
};

export default Create;
