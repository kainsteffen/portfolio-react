import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { HashRouter as Router } from "react-router-dom";
import "./animations.scss";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const history = createBrowserHistory();
history.listen((location) => {
  window.ga("set", "page", location.location.hash);
  window.ga("send", "pageview");
});

const app = (
  <Router basename="/" history={history}>
    <App />
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
