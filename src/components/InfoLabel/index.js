import React from 'react';

const InfoLabel = ({ children }) => {
    const styles = {
        padding: '4px 8px',
        background: '#000000A3',
        color: '#FFF',
        width: 'max-content',
        borderRadius: 3,
        height: 24,
        display: 'flex',
        alignItems: 'center'
    };
    return <div style={styles}>
        {children}
    </div>;
};

export default InfoLabel;

