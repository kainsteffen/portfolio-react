import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import {
    PurchaseTrackerPage,
    UpwardsPage,
    OverlaysPage,
    AstendoEventPage
} from './components/ProjectPages';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ScrollToTop>
                    <TransitionGroup className="transition-group">
                        <CSSTransition
                            key={this.props.location.key}
                            timeout={{ enter: 300, exit: 300 }}
                            className={'fade'}
                        >
                            <section className="route-section">
                                <Switch location={this.props.location}>
                                    <Route exact path='/' component={HomePage} />
                                    <Route path='/about' component={AboutPage} />
                                    <Route path='/purchase-tracker' component={PurchaseTrackerPage} />
                                    <Route path='/upwards' component={UpwardsPage} />
                                    <Route path='/overlays' component={OverlaysPage} />
                                    <Route path='/astendo-event' component={AstendoEventPage} />
                                </Switch>
                            </section>
                        </CSSTransition>
                    </TransitionGroup>
                </ScrollToTop>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
