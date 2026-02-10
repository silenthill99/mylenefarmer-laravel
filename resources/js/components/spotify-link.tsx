import React from 'react';

type Props = {
    id: string;
}

const SpotifyLink = ({id}: Props) => {
    return (
        <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/album/${id}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    );
};

export default SpotifyLink;
