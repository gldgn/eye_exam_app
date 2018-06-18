import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Introduction from "../../components/Introduction/Introduction";
import Exam from "../../components/Exam/Exam";

import { loadApplication } from "../../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    console.log("action sent..");
    this.props.loadApplication({ status: "OK", mode: "dev" });
  };

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Introduction />
        <Exam />
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
