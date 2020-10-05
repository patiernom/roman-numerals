import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Converter from "./Converter";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(15, 0, 6),
  }
}));

export default function HeroContent() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.heroContent}>
      <Grid container justify="center" >
        <Grid item xs={6}>
          <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
            Roman Numerals Converter
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
            This simple Roman Numerals Converter can be used at any time to convert numbers to Roman numerals and vice versa.
          </Typography>
          <Box my={6}>
            <Converter showLabel={false} defaultValue="MMXX" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};