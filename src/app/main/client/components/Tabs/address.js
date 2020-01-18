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

class Address extends Component<Props, State> {
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
        {/* <div className={classes.paper}> */}
          <Formsy className="flex flex-col justify-center">
            <Grid container style={{ padding: "5px" }}>
              <Grid xs={6} style={{ padding: "5px" }}>
                <lable>ADDRESS</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
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
                <lable>POSTAL CODE</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
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
                <lable>COUNTRY</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
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
              </Grid>
              <Grid xs={6} style={{ padding: "5px" }}>
                <lable>TOWN/CITY</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="email"
                  name="town"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>PROVINCE/COUNTRY</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="email"
                  name="province"
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
          </Formsy>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Address);
