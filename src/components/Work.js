import React from "react";
import Sidebar from "./Sidebar";
import SplitText from "react-pose-text";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      velocity: 12
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Work = () => {
  const classes = useStyles();
  return (
    <div className="workContainer">
      <Sidebar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            xs
          </Grid>
          <Grid item xs>
            xs
          </Grid>
          <Grid item xs>
            xs
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            xs
          </Grid>
          <Grid item xs={6}>
            xs=6
          </Grid>
          <Grid item xs>
            xs
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Work;
