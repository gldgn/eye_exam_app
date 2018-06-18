import React from "react";
import Grid from "@material-ui/core/Grid";

//stateless component
const Introduction = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          hello
        </Grid>
        <Grid item xs={12}>
          <div>CLICK HERE IF YOU NEED AN EYE EXAM FOR FREE</div>
        </Grid>
        <Grid item xs={12}>
          <div>
            We're fresh & innovative in our approach but we are a non profit
            organization & our mission to give vision, needs your support. All
            proceeds from demand care go directly to Will Grant Vision
            Foundation program services.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;
