import React from 'react';

type Props = {
    id: string;
}

const DeezerLink = ({id}: Props) => {
    return (
        <iframe
            title="deezer-widget"
            src={'https://widget.deezer.com/widget/auto/album/' + id}
            width="100%"
            height="300"
            allow="encrypted-media; clipboard-write"
        />
    );
};

export default DeezerLink;
