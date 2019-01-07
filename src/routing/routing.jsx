import React from "react"
import { Route, Switch } from "react-router-dom"
import AdminPage from "../adminPage/adminPage"
import HomePage from "../homePage/homePage"
import NotFoundPage from "./NotFoundPage"
import PrivateRoute from "./privateRoute"
import Login from '../login/Login'


class Routing extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/admin" component={AdminPage} />
          <Route path='/login' component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
    );
  }
}

export default Routing
