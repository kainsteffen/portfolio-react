import React from 'react';
import './CustomButton.css';

function CustomButton(props) {
    return (
        <button className='custom-button' onClick={props.onPress}>
            {props.leadingIcon && <img src={props.leadingIcon} />}
            <label>
                {props.label}
            </label>
        </button>
    );
}

export default CustomButton;