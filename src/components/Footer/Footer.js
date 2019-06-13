import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='footer-container' >
                <address className='contact-section'>
                    <div>
                        Khanh Steffen
                    <br></br>
                        Software Developer
                    </div>
                    <div>
                        Berlin, Germany
                    <br></br>
                        13055, Lichtenberg
                    </div>
                    <div>
                        <a href='tel:0176 4388 4355'>+ 0176 4388 4355</a>
                        <br></br>
                        <a href='mailto:khanhsteffen@gmail.com'>khanhsteffen@gmail.com</a>
                    </div>
                    <div className='contact-section-spacer' />
                    <div className='social-media-links'>
                        <a href='https://github.com/kainsteffen'>
                            <img src={require('./images/github-logo.svg')} alt='Github logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/khanh-steffen/'>
                            <img src={require('./images/linkedin-logo.svg')} alt='Linkedin logo' />
                        </a>
                        <a href='https://www.xing.com/profile/TranDuyKhanh_Steffen'>
                            <img src={require('./images/xing-logo.svg')} alt='Xing logo' />
                        </a>
                    </div>
                </address>
                <span className='copyright-text'>{'Designed and Coded by Khanh Steffen © ' + new Date().getFullYear() + ' '}</span>
                <button onClick={this.handleClick} className='scroll-top-button'>
                    <img src={require('./images/arrow_up.svg')} alt='Arrow up' />
                </button>
            </footer >
        );
    }

    handleClick(e) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
}

export default Footer;
