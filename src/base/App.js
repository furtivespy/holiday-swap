import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import styled from 'styled-components'
import Header from '../headerbar/header';
import Routing from "../routing/routing";
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
        <Routing />
      </Wrapper>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
