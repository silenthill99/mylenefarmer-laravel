import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
    flash: {
        success: string | null;
    }
    albums: Album[]
}

export interface Role {
    users: User[],
    id: string,
    name: string,
    slug: string,
    created_at?: string,
    updated_at?: string
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
    role: Role
}

export interface Album {
    id: number;
    title: string;
    slug: string;
    image_path: string;
    tracklist: string;
    created_at: string;
    updated_at: string;
    coming_soon: boolean;
    deezer_url?: string;
    spotify_url?: string;
    apple_music_url?: string;
}

export interface MenuNav {
    name: string,
    link?: string,
    isDropdown?: boolean,
    children?: MenuNav[]
}
