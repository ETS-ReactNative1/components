import React from 'react';
import ImageContainer from '../ImageContainer';
import InfoLabel from '../InfoLabel';

const ListingCell = () => {

    const cellContainerStyles = {
        'width': 322,
        'height': 288,
        'border-radius': 8,
        'border': '1px solid #E6E9EB',
    };

    return <div style={cellContainerStyles}>
        <ImageContainer src={`https://s3-alpha-sig.figma.com/img/f0cb/a9a7/7c341858d9c7e5f32da86503d895e79f?Expires=1644192000&Signature=ekOvShUGIEKP12o3tues6naQKhSegPOvdjR3GvNs6k-R40dEd46vm68E0pV1UFLngW08TPB99vQ0CEfQT5wMzui07guLnUognyo4R5U2TqAHXS-kn-mkyUdp40SVDzOl-sn8mPKZjwOVpdtJJsKNc67VJgfECePunACa7YR4sztw8pAt6KrgRSBlNyuceJb2YNOXei6R1uP29PM0UCip5FEjP6dMnAa7LwISr3HX6cLUCphQGy-Xw0m2qpCoSTh7vyqhs9k0OQfo067hMVTI6gUtuAyk~ofIa8EQkktbPJdBsWzaiPkJjRLZzYe2tkwjXAblc6x1W6K-ea~4rpqk1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}>
            <InfoLabel >SOLD AUG 22, 2021</InfoLabel>
        </ImageContainer>
    </div>;
};

export default ListingCell;
