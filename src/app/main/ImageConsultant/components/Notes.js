import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { withStyles, TextField } from "@material-ui/core";
// import { TextField } from "@fuse";
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

class Notes extends Component<Props, State> {
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
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Formsy
          className="flex flex-col justify-center"
          style={{ padding: "5px" }}
        >
          <Grid container>
            <Grid xs={6} style={{ paddingRight: "2px" }}>
          
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="text"
                label="DATE OF LAST APPT"
                name="address"
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                required
                variant="outlined"
              />
      
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                label="TOTAL LAST APPT"
                type="text"
                name="postal_code"
                validations={{
                  minLength: 6
                }}
                validationErrors={{
                  minLength: "Min character length is 6"
                }}
                required
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} style={{ paddingLeft: "2px" }}>
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="email"
                name="town"
                label="DAYS SINCE"
                validations={{
                  minLength: 2
                }}
                validationErrors={{
                  minLength: "Min character length is 2"
                }}
                required
                variant="outlined"
              />
          
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="email"
                name="province"
                label="AGE TILL BIRTHDAY"
                validations={{
                  minLength: 2
                }}
                validationErrors={{
                  minLength: "Min character length is 2"
                }}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
      
          <TextField
            style={{ width: "100%", boxSizing: "border-box", margin: "5px 0" }}
            className="my-16"
            type="email"
            label="APPOINTMENT NOTES"
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
          <TextField
            style={{ width: "100%", boxSizing: "border-box", margin: "5px 0" }}
            className="my-16"
            label="LAST COLOUR"
            type="email"
            name="country"
            validations={{
              minLength: 2
            }}
            validationErrors={{
              minLength: "Min character length is 2"
            }}
            required
            variant="outlined"
          />
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Notes);