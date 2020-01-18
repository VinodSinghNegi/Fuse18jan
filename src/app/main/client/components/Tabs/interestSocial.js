import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, TextField, Button } from "@material-ui/core";
import { FuseChipSelectFormsy } from "@fuse";
import Formsy from "formsy-react";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const suggestions = ["Sea", "Sky", "Forest", "Aerial", "Art"].map(item => ({
  value: item,
  label: item
}));

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
        <Formsy className="flex flex-col justify-center">
          <Grid container style={{ padding: "5px" }}>
            <Grid xs={6} style={{ padding: "5px" }}>
              <lable>HOBBY</lable>
              <FuseChipSelectFormsy
                className="w-full"
                name="tags"
                placeholder="Select multiple tags"
                textFieldProps={{
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "standard"
                }}
                options={suggestions}
                isMulti
                validations={{ minLength: 1 }}
                validationErrors={{
                  minLength: "You need to select at least one"
                }}
                required
              />
              <br />
              <br />
              <lable>INTERESTS</lable>
              <FuseChipSelectFormsy
                className="w-full"
                name="tags"
                placeholder="Select multiple tags"
                textFieldProps={{
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "standard"
                }}
                options={suggestions}
                isMulti
                validations={{ minLength: 1 }}
                validationErrors={{
                  minLength: "You need to select at least one"
                }}
                required
              />
              <br />
              <br />
              <lable>FACEBOOK</lable>
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="text"
                name="fiscal_code"
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                required
                variant="outlined"
              />
              <lable>LINKEDIN</lable>
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="text"
                name="fiscal_code"
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
              <lable>CLUB</lable>
              <FuseChipSelectFormsy
                className="w-full"
                name="tags"
                placeholder="Select multiple tags"
                textFieldProps={{
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "standard"
                }}
                options={suggestions}
                isMulti
                validations={{ minLength: 1 }}
                validationErrors={{
                  minLength: "You need to select at least one"
                }}
                required
              />
              <br />
              <br />
              <lable>INSTAGRAM</lable>
              <TextField
                style={{ width: "100%" }}
                className="my-16"
                type="text"
                name="instagram"
                validations={{
                  minLength: 4
                }}
                validationErrors={{
                  minLength: "Min character length is 4"
                }}
                required
                variant="outlined"
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  className="mx-auto my-16"
                  aria-label="LOG IN"
                >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mx-auto my-16"
                  aria-label="LOG IN"
                >
                  SAVE
                </Button>
              </div>
            </Grid>
          </Grid>
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BankData);
