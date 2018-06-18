import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Logo from "../../assets/logo.svg";
import { loadApplication } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class App extends Component {
  componentDidMount = () => {
    console.log("action sent..");
    this.props.loadApplication({ status: "OK", mode: "dev" });
  };

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Button component={Link} to="/login">
          Login
        </Button>
        <div className="App-logo">
          <img src={Logo} alt="" />
        </div>

        <span>WILL GRANT VISION FOUNDATION IS A 501C3 FOR-PURPOSE.ORG</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    appReducer: { loaded }
  } = state;
  console.log("App loaded : ", loaded);
  return {
    loaded
  };
};

export default connect(
  mapStateToProps,
  { loadApplication }
)(App);
