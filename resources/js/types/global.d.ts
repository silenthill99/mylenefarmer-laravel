import { Auth, Album, Concert } from '@/types/index';
import "@inertiajs/core"

declare module "@inertiajs/core" {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            quote: { message: string; author: string };
            auth: Auth;
            ziggy: Config & { location: string };
            [key: string]: unknown;
            albums: Album[];
            concerts: Concert[];
        }
        flashDataType: {
            success?: string;
            status?: string;
        }
    }
}
