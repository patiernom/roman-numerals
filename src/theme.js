import { createMuiTheme } from '@material-ui/core/styles';

const options = {
  palette: {
    primary: {
      main: "#388e3c"
    },
    secondary: {
      main: "#ff9100"
    }
  }
}

const theme = createMuiTheme(options);

export default theme;
