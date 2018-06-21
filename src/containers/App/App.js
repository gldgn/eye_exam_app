import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import { loadApplication } from "../../actions";
import { connect } from "react-redux";
import MainArea from "../../components/MainArea/MainArea";
import Summary from "../../components/Summary/Summary";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  componentDidMount = () => {
    console.log("action sent..");
    this.props.loadApplication({ status: "OK", mode: "dev" });
  };

  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar />
          </Grid>
          <Grid item xs={12}>
            <Summary />
          </Grid>
          <Grid item xs={12}>
            <MainArea />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
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
