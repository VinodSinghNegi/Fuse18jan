import React, { Component } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import Formsy from "formsy-react";

const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

interface Props {}

interface State {}

class Diagnosis extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rightcontent: 0
    };
  }

  setrightcontent = rightcontent => {
    debugger;
    this.setState({ rightcontent: rightcontent });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="p-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center"
          }}
        >
          <Button
            className="mb-5"
            style={{
              width: "100%",
              color: "white",
              padding: "10px"
            }}
            variant="contained"
            color="primary"
          >
            HAIR DIAGNOSIS
          </Button>
          <Button
            className="mb-5"
            style={{
              width: "100%",
              color: "white",
              padding: "10px"
            }}
            variant="contained"
            color="primary"
          >
            SCALP DIAGNOSIS
          </Button>
          <Button
            className="mb-5"
            style={{
              width: "100%",
              color: "white",
              padding: "10px"
            }}
            variant="contained"
            color="secondary"
          >
            GENERAL
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Diagnosis);
