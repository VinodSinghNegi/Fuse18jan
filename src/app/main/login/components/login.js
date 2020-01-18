import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@material-ui/core";
import classNames from "classnames";
import { Link } from "react-router-dom";
import _ from "@lodash";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { FuseAnimate } from "@fuse";
import * as authActions from 'app/auth/store/actions';

const styles = theme => ({
  root: {
    background:
      "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
    backgroundSize: "cover"
  },
  card: {
    width: "100%",
    maxWidth: 384
  }
});

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    remember: true
  };

  handleChange = event => {
    this.setState(
      _.set(
        { ...this.state },
        event.target.name,
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
      )
    );
  };

  canBeSubmitted() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.submitLogin({ username, password });
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <div
        className={classNames(
          classes.root,
          "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32"
        )}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <FuseAnimate animation="transition.expandIn">
            <Card className={classes.card}>
              <CardContent className="flex flex-col items-center justify-center p-32">
                <img
                  className="w-128 m-32"
                  src="assets/images/logos/fuse.svg"
                  alt="logo"
                />

                <Typography variant="h6" className="mt-16 mb-32">
                  LOGIN TO YOUR ACCOUNT
                </Typography>

                <form
                  name="loginForm"
                  noValidate
                  className="flex flex-col justify-center w-full"
                  onSubmit={this.handleSubmit}
                >
                  <TextField
                    className="mb-16"
                    label="Username"
                    autoFocus
                    type="test"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    variant="outlined"
                    required
                    fullWidth
                  />

                  <TextField
                    className="mb-16"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    variant="outlined"
                    required
                    fullWidth
                  />

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link
                      className="font-medium"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    className="w-224 mx-auto mt-16"
                    aria-label="LOG IN"
                    type="submit"
                    disabled={!this.canBeSubmitted()}
                  >
                    LOGIN
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FuseAnimate>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({
    submitLogin: authActions.submitLogin,
  },
  dispatch);
}
export default withStyles(styles, { withTheme: true })(connect(null, mapDispatchToProps)(LoginPage));