import React from "react";
import Grid from "@material-ui/core/Grid";
import "./MainArea.css";
//stateless component
const MainArea = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className="exam-text">
            <span>where would you like your exam?</span>
          </div>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3} className="App-bg-color-blue">
          <div className="left-box">
            <div>In a Really Cool Spot</div>
            <div className="App-white-color small-white-text">NEARBY</div>
          </div>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3} className="App-bg-color-blue">
          <div className="right-box">
            <div>Delivered</div>
            <div className="App-white-color small-white-text">TO YOU</div>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default MainArea;
