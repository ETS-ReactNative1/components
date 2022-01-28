import React from 'react';

const ImageContainer = ({ src, children }) => {

    const style = {
        'height': 186,
        'width': '100%',
        'border-top-left-radius': 8,
        'border-top-right-radius': 8,
        'background-image': `url("${src}")`,
        'background-size': 'cover',
        'padding': 16,
    }

    const isMobile = true;

    return (
        <div style={style}>
            {isMobile && children}
        </div>
    )
};

export default ImageContainer;
