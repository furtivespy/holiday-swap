import React from "react"
import { Route, Switch } from "react-router-dom"
import AdminPage from "../adminPage/adminPage"
import HomePage from "../homePage/homePage"
import NotFoundPage from "./NotFoundPage"
import PrivateRoute from "./privateRoute"
import Login from '../login/Login'
import TestPage from '../testPage/testPage'


class Routing extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/admin" component={AdminPage} />
          <Route path='/login' component={Login} />
          <Route path='/test/:gameId' component={TestPage} />
          <Route component={NotFoundPage} />
        </Switch>
    );
  }
}

export default Routing
