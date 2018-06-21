import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/logo.svg";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <div className="App-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="trademark">
            <span>WILL GRANT VISION FOUNDATION IS A 501C3 FOR-PURPOSE.ORG</span>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
