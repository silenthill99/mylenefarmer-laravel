import React from 'react';

type Props = {
    id: string
}

const AppleMusicLink = ({id}: Props) => {
    return (
        <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={`https://embed.music.apple.com/fr/album/${id}`}
        />
    );
};

export default AppleMusicLink;
