import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { withStyles, TextField } from "@material-ui/core";
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

class BankData extends Component<Props, State> {
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
                <lable>BANK ACCOUNT HOLDER</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="name"
                  validations={{
                    minLength: 4
                  }}
                  validationErrors={{
                    minLength: "Min character length is 4"
                  }}
                  required
                  variant="outlined"
                />
                <lable>IBAN</lable>
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
              </Grid>
              <Grid xs={6} style={{ padding: "5px" }}>
                <lable>BANK NAME</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="bank_name"
                  validations={{
                    minLength: 4
                  }}
                  validationErrors={{
                    minLength: "Min character length is 4"
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

export default withStyles(styles, { withTheme: true })(BankData);
