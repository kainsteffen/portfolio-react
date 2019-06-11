import React, { Component } from 'react';
import './HomePage.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard.js';
import Navbar from '../../components/Navbar/Navbar.js';
import SectionHeader from '../../components/SectionHeader/SectionHeader.js';
import Header from './Header/Header.js'
import Footer from '../../components/Footer/Footer.js';

class HomePage extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Navbar />
          <main>
            <Header />
            <SectionHeader text='My Projects' />
            <section className='project-section'>
              <ProjectCard
                imgSrc={require('./images/purchase-tracker-thumbnail.png')}
                logoSrc={require('./images/purchase-tracker-logo.svg')}
                cardTitle='Purchase Tracker'
                cardDescription='Mobile App | Finance'
                routerPath='/purchase-tracker'
              />
              <ProjectCard
                imgSrc={require('./images/upwards-thumbnail.png')}
                logoSrc={require('./images/upwards.png')}
                cardTitle='Upwards!'
                cardDescription='Mobile Game | Casual'
                routerPath='/upwards'
              />
              <ProjectCard
                imgSrc={require('./images/overlays-thumbnail.png')}
                logoSrc={require('./images/overlays.svg')}
                cardTitle='Overlays'
                cardDescription='Mobile Game | Educational'
                routerPath='/overlays'
              />
              <ProjectCard
                imgSrc={require('./images/astendo-event-thumbnail.png')}
                logoSrc={require('./images/astendo-event-logo.png')}
                cardTitle='astendo Event'
                cardDescription='Mobile App | Events'
                routerPath='/astendo-event'
              />
              <ProjectCard
                imgSrc={require('./images/polywar.jpg')}
                logoSrc={require('./images/polywar-logo.png')}
                cardTitle='Polywar'
                cardDescription='Mobile Game | Shooter'
              />
            </section>

          </main>
          <Footer />
        </body>
      </div >
    );
  }
}

export default HomePage;
