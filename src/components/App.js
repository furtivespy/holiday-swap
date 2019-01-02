import { Route, Switch } from "react-router-dom";
import AdminPage from "../adminPage/adminPage";
import HomePage from "../homePage/homePage";
import NotFoundPage from "./NotFoundPage";
import Header from '../headerbar/header';
import Login from '../login/Login';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const Wrapper = styled.div`
  padding-top: 1em;
`

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path='/login' component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </Wrapper>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
