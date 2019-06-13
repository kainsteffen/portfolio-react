import React, { Component, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';
import HamburgerButton from './HamburgerButton/HamburgerButton.js';
import MobileNavbar from './MobileNavbar/MobileNavbar.js';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isScrolled: false, isToggled: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    render() {
        if (!this.state.isScrolled) {
            return (
                <nav className="navbar">
                    <h1>
                        <Link to='/'>
                            <img src={require('./images/logo.svg')} className='logo' alt='Khanh Steffen' />
                        </Link>
                    </h1>
                    <ul className="navbar-right">
                        <Link to='/' id={this.props.location.pathname == '/' && 'active'}>WORK</Link>
                        <Link to='/about' id={this.props.location.pathname == '/about' && 'active'}>ABOUT</Link>
                    </ul>
                    <HamburgerButton isCollapsed={this.state.isToggled} onClick={this.handleClick.bind(this)} />
                    <MobileNavbar isToggled={this.state.isToggled} onClick={this.handleClick.bind(this)} />
                </nav >
            )
        } else {
            return (<div />)
        }
    }

    handleClick() {
        this.setState(
            state => ({
                isToggled: !state.isToggled
            })
        );
    }

    handleScroll(event) {
        let scrollTop = window.pageYOffset;
        console.log(scrollTop);
        if (scrollTop > 0) {
            this.setState(
                {
                    //isScrolled: true,
                }
            );
        } else if (scrollTop == 0) {
            this.setState(
                {
                    //isScrolled: false,
                }
            )
        }
    }
}

export default withRouter(Navbar);