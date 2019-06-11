import React, { Component } from 'react';
import './Header.css';
import './pong.js';

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
      <div id='header-container' >
        <div className='header__quote'>
          <img src={require('./images/quotation-mark.svg')} />
          <div className='header-titles'>
            <h1>Hi, I'm Khanh</h1>
            <h2> I'm good at pushing pixels around the screen.</h2>
          </div>
        </div>
        {
          window.pageYOffset < this.state.componentHeight &&
          <button className='arrow-down-button' onClick={this.handleArrowDownButtonPress.bind(this)}>
            <img src={require('./images/arrow-down.svg')} />
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
