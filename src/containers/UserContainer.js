import React, { Component } from "react";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import { connect } from "react-redux";
import MyProfileContainer from "./MyProfileContainer";

class UserContainer extends Component {
  renderProperContent = () => {
    let path = this.props.match.path;
    if (this.props.loggedIn) {
      return <MyProfileContainer />;
    } else if (path === "/signup") {
      return <SignUp history={this.props.history} />;
    } else {
      return <LogIn history={this.props.history} />;
    }
  };

  render() {
    return <div>{this.renderProperContent()}</div>;
  }
}

export default connect((state) => ({ loggedIn: state.user.login }))(UserContainer);
