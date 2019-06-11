import React from 'react';
import './HamburgerButton.css';

function HamburgerButton(props) {
    return (
        <button className={props.isCollapsed ? 'hamburger-button collapsed' : 'hamburger-button'} onClick={props.onClick}>
            <div className='hamburger-button__line' />
            <div className='hamburger-button__line' />
            <div className='hamburger-button__line' />
        </button>
    )
}

export default HamburgerButton;