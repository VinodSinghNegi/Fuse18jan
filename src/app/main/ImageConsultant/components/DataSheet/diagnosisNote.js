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
        <Formsy
          className="flex flex-col"
          style={{
            padding: "10px",
            minHeight: "100%",
            justifyContent: "space-between"
          }}
        >
          <div>
            <lable>DIAGNOSIS NOTES</lable>
            <TextField
              style={{
                width: "100%",
                boxSizing: "border-box",
                margin: "5px 0"
              }}
              className="my-16"
              type="email"
              name="country"
              validations={{
                minLength: 2
              }}
              multiline
              rows={5}
              validationErrors={{
                minLength: "Min character length is 2"
              }}
              required
              variant="outlined"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className="p-5 mr-5 "
              color="secondary"
              style={{
                width: "100%",
                color: "white"
              }}
              variant="contained"
            >
              CANCEL
            </Button>
            <Button
              style={{
                width: "100%",
                color: "white"
              }}
              variant="contained"
              color="primary"
            >
              SAVE
            </Button>
          </div>
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Diagnosis);
