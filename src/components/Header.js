import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar classes={classes.appBar}>
      <Toolbar classes={classes.toolbar}>
        <Typography variant="h6" color="inherit" classes={classes.toolbarTitle}>
          Roman Numerals
        </Typography>
      </Toolbar>
    </AppBar>
  );
};