import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Summary.css";

//stateless component
const Summary = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className="hello-message">
            <span>hello</span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="App-color-blue click-here-text">
            <span>CLICK HERE IF YOU NEED AN EYE EXAM FOR FREE</span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="description-text">
            <span>
              We are fresh & innovative in our approach but we are a non-profit
              organization<br /> & our mission to give vision, needs your
              support. All proceeds from on<br /> demand care go directly to
              Will Grant Vision Foundation program services.
            </span>
          </div>
          <div className="blue-line" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
