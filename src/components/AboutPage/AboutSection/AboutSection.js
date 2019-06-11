import React, { Component } from 'react';
import './AboutSection.css';
import SectionHeader from '../../SectionHeader/SectionHeader.js';

class AboutSection extends Component {
    render() {
        return (
            <section className='about-section'>
                <SectionHeader text='About Me' />
                <div className='about-section-content'>
                    <img src={require('./images/profile-picture.jpg')} alt='Profile' />
                    <h4>Khanh Steffen</h4>
                    <p>
                        A software developer specialised in mobile application, game and web development based in Berlin, Germany.
                        I am currently pursuing my Bachelor's Degree in International Media Computer Science
                        at the Hochschule für Technik und Wirtschaft.
                        A relentless work attitude striving for quality products that people enjoy and a critical
                        attention to detail are what define me.
                    </p>
                    <div className='download-button-container'>
                        <button className='download-button' onClick={this.handleDownloadButtonPress}>
                            Download Resume
                        </button>
                    </div>
                </div>

            </section>
        );
    }

    handleDownloadButtonPress() {
        console.log("bruh");
    }
}

export default AboutSection;



