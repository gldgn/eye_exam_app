import React from "react";
import Grid from "@material-ui/core/Grid";

//stateless component
const Exam = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          where would you like your exam?
        </Grid>
        <Grid item xs={6}>
          <div>In a Really Cool Spot</div>
          <div>Nearby</div>
        </Grid>
        <Grid item xs={6}>
          <div>Delivered</div>
          <div>To you</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Exam;
