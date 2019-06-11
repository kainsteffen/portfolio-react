import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PurchaseTrackerPage from './components/ProjectPages/PurchaseTrackerPage/PurchaseTrackerPage';
import UpwardsPage from './components/ProjectPages/UpwardsPage/UpwardsPage';
import OverlaysPage from './components/ProjectPages/OverlaysPage/OverlaysPage';
import AstendoEventPage from './components/ProjectPages/AstendoEventPage/AstendoEventPage';

const routing = (
    <Router>
        <ScrollToTop>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/purchase-tracker' component={PurchaseTrackerPage} />
            <Route path='/upwards' component={UpwardsPage} />
            <Route path='/overlays' component={OverlaysPage} />
            <Route path='/astendo-event' component={AstendoEventPage} />
        </ScrollToTop>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
