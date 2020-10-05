import React from "react";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      Built with <span role="img" aria-label="Love">❤️</span> by <Link href="mailto:marco_patierno@msn.com">Marco Patierno</Link>
    </Container>
  );
};