import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import "./App.css";
import ProjectPage from "./components/ProjectPages/ProjectPage";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ScrollToTop>
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={this.props.location.pathname}
              timeout={500}
              className="fade"
            >
              <section className="route-section">
                <Switch location={this.props.location}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/projects/:id">
                    <ProjectPage />
                  </Route>
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
      </>
    );
  }
}

export default withRouter(App);
