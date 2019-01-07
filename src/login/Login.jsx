import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Callout, Classes } from "@blueprintjs/core"
import { isLoaded, isEmpty } from 'react-redux-firebase'
import * as actions from '../actions/authActions'

export class Login extends React.Component {
    loginTwitter = () => {
        this.props.actions.loginClick('Twitter')
    }
    logout = () => {
        this.props.actions.logoutClick()
    }

    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <Callout intent="primary" title="Only Twitter Login" icon="info-sign" >
                    Login is ony available with twitter at this time
                </Callout>
                <p></p>
                {!isLoaded(this.props.auth) || isEmpty(this.props.auth) ? 
                <div><button className={Classes.BUTTON} onClick={this.loginTwitter}>
                    <img src={require("./sign-in-with-twitter-link.png")} alt="Sign In With Twitter" />
                </button></div> :
                <div><button className={Classes.BUTTON} onClick={this.logout}>Logout</button></div> }
            </div>
        )
    }
}

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object
  };

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)