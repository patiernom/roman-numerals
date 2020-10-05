import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Documentation() {
  return (
    <Container maxWidth="lg" component="main">
      <Grid container >
        <Grid item xs={6}>
          <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
            Number to Roman Numerals Conversion Examples
          </Typography>
          <Typography variant="body1" align="left" component="p">
            14 = XIV <br/>
            79 = LXXIX <br/>
            225 = CCXXV <br/>
            845 = DCCCXLV <br/>
            2022 = MMXXII <br/>
          </Typography>
          <br/>
          <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
            Roman Numeral Symbols
          </Typography>
          <Typography variant="body1" align="left" component="p">
            I = 1 V = 5 X = 10 L = 50 C = 100 D = 500 M = 1000
          </Typography>
        </Grid>
        <Grid item xs={6} spacing={2}>
          <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
            Calculator Use
          </Typography>
          <Typography variant="body2" align="left" component="p" paragraph>
            Use this Roman numeral converter to convert numbers from 1 to 3,999 into Roman numerals. Or input a Roman numeral to get its regular Arabic number value.
          </Typography>
          <Typography variant="body2" align="left" component="p" paragraph>
            Roman numerals are a number system developed in ancient Rome where letters represent numbers. The modern use of Roman numerals involves the letters I, V, X, L, C, D, and M.
          </Typography>
          {/*<Typography variant="body2" align="left" component="p" paragraph>*/}
          {/*  To convert Roman numerals greater than 3,999 use the table below for converter inputs. Use a leading underline character to input Roman numerals with an overline. A line over a Roman numeral means it is multiplied by 1,000.*/}
          {/*</Typography>*/}
          <Typography variant="body2" align="left" component="p" paragraph>
            The largest number you can write in Roman numerals is 3,999 which is MMMCMXCIX. You can represent numbers larger than 3,999 in Roman numerals using an overline. An overline on a Roman numeral means you are multiplying that Roman numeral by 1,000. For the number 50,000 in Roman numerals you would use the Roman numeral L (50) with an overline to make it 50,000.
            <br/>
            For example, L means 50 × 1,000 = 50,000.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};