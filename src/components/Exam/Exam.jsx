import React from "react";
import Grid from "@material-ui/core/Grid";

//stateless component
const Exam = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1>where would you like your exam?</h1>
        </Grid>
        <Grid item xs={5} className="App-card text">
          <div>In a Really Cool Spot</div>
          <div className="App-white-color">Nearby</div>
        </Grid>
        <Grid item xs={5} className="App-card text">
          <div>Delivered</div>
          <div className="App-white-color">To you</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Exam;
