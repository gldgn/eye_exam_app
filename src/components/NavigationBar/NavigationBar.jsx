import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";

import "./NavigationBar.css";

const styles = () => ({
  container: {},
  floatLeft: {
    float: "left"
  },
  floatRight: {
    float: "right"
  },
  margin: {
    marginTop: 26,
    marginRight: -34,
    marginLeft: 10
  },
  cssRoot: {
    borderRadius: 0,
    color: grey[50],
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: grey[900],
    "&:hover": {
      color: grey[500],
      backgroundColor: grey[900]
    },
    "&:active": {
      color: grey[500],
      backgroundColor: grey[900]
    }
  }
});

class NavigationBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(
                classes.margin,
                classes.cssRoot,
                classes.floatRight
              )}
              component={Link}
              to="/on-demand"
            >
              ON DEMAND
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(
                classes.margin,
                classes.cssRoot,
                classes.floatLeft
              )}
              component={Link}
              to="/eye-exam"
            >
              EYE EXAM
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div className="App-color-blue login-button">
              <span>Login</span>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationBar);
