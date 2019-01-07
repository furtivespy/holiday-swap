import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.any,
    authExists: PropTypes.bool,
  }

  render() {
    var { component: Component, authExists: auth, ...rest } = this.props
    return (
        <Route
          {...rest}
          render={props =>
            auth ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
  }
}

export default connect(
  ({ firebase: { auth } }) => ({ authExists: !!auth && !!auth.uid })
)(PrivateRoute)