import React from 'react';
import './Space.css';

function Space(props) {
    var style = {
        width: props.width,
        height: props.height,
    }

    return (
        <div style={style} />
    );
}

export default Space;