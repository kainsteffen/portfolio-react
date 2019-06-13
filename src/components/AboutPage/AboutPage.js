import React, { Component } from 'react';
import './AboutPage.css';
import AboutSection from './AboutSection/AboutSection.js';
import MottoSection from './MottoSection/MottoSection.js';
import SkillsSection from './SkillsSection/SkillsSection.js';
import Footer from '../Footer/Footer.js';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <AboutSection />
                    <MottoSection />
                    <SkillsSection />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
