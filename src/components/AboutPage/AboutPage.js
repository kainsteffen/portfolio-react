import React, { Component } from 'react';
import './AboutPage.css';
import AboutSection from './AboutSection/AboutSection.js';
import SkillsSection from './SkillsSection/SkillsSection.js';
import Footer from '../Footer/Footer.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <body>
                    <main>
                        <AboutSection />
                        <SkillsSection />
                    </main>
                    <Footer />
                </body>
            </div>
        );
    }
}

export default App;
