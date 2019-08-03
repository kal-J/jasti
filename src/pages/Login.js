import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import Container from "@material-ui/core/Container";
import AppBar from "./components/AppBar";
import Home from "./Home";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue
  },
  status: {
    danger: "orange"
  }
});
const useStyles = {
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
};

const classes = useStyles;

export default class Login extends React.Component {
  state = {
    isLoggedin: false
  };
  render() {
    if (!this.state.isLoggedin) {
      return (
        <React.Fragment>
          <AppBar />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ isLoggedin: true });
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ isLoggedin: true });
                      }}
                      variant="body2"
                      href="#"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ isLoggedin: true });
                      }}
                      variant="body2"
                      href="#"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </React.Fragment>
      );
    } else {
      return <Home />;
    }
  }
}
