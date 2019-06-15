import React, { Component } from 'react';
import './Header.css';
import './pong.js';
import '../../BallGridAnimation/BallGridAnimation';
import BallGridAnimation from '../../BallGridAnimation/BallGridAnimation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { componentHeight: 0 };
  }

  componentDidMount() {
    const height = document.getElementById('header-container').clientHeight;
    let componentHeight = height + 0.15 * height;
    this.setState({ componentHeight });
  }

  render() {
    return (
      <div id='header-container'>
        <div className='header-animation-container'>
          <BallGridAnimation size={100} rows={3} columns={3} animationSpeed={500} animationDelay={1000} />
        </div>
        <div className='header-quote fadeIn-slideInFromBelow'>
          <img src={require('./images/quotation-mark.svg')} alt='Quotation mark' />
          <div className='header-titles'>
            <h1>Hi, I'm Khanh</h1>
            <h2> I'm good at pushing pixels around the screen.</h2>
          </div>
        </div>
        {
          window.pageYOffset < this.state.componentHeight &&
          <button className='arrow-down-button fadeIn' onClick={this.handleArrowDownButtonPress.bind(this)}>
            <img src={require('./images/arrow-down.svg')} alt='Arrow down' className='fadeIn' />
          </button>
        }
      </div >
    );
  }

  handleArrowDownButtonPress() {
    if (window.pageYOffset < this.state.componentHeight)
      window.scrollTo({ top: this.state.componentHeight, left: 0, behavior: 'smooth' });
  }
}

export default Header;
