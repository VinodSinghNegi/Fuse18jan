import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { withStyles, TextField, MenuItem, Button } from "@material-ui/core";
import { SelectFormsy } from "@fuse";
import Formsy from "formsy-react";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "100%"
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
        <div className={classes.paper}>
          <Formsy className="flex flex-col justify-center">
            <Grid container style={{ padding: "5px" }}>
              <Grid xs={6} style={{ padding: "5px" }}>
                <lable>FISCAL CODE</lable>
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
                <lable>OTHER PHONE NUMBERS</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="phone_numbers"
                  validations={{
                    minLength: 9
                  }}
                  validationErrors={{
                    minLength: "Min character length is 9"
                  }}
                  required
                  variant="outlined"
                />
                <lable>MESSENGER</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="messenger"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>BIRTH DATE</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="date"
                  name="birth_date"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>STAR SIGN</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="star_sign"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>PRIVACY</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="privacy"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>VCA MAP</lable>
                <SelectFormsy
                  className="flex flex-col justify-center"
                  name="related"
                  label=""
                  value="Select All"
                  variant="outlined"
                >
                  <MenuItem value="0">
                    <em>0min</em>
                  </MenuItem>
                  <MenuItem value="5">5min</MenuItem>
                  <MenuItem value="10">10min</MenuItem>
                  <MenuItem value="15">15min</MenuItem>
                </SelectFormsy>
                <lable>NET PROMOTER SCORE</lable>
              </Grid>
              <Grid xs={6} style={{ padding: "5px" }}>
                <lable>SALES TAX CODE</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="numeric"
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
                <lable>WHATSAPP</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="numeric"
                  name="whatsapp"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>TELEGRAM</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="numeric"
                  name="telegram"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: "Min character length is 2"
                  }}
                  required
                  variant="outlined"
                />
                <lable>SEX</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="numeric"
                  name="sex"
                  validations={{
                    minLength: 1
                  }}
                  validationErrors={{
                    minLength: "Min character length is 1"
                  }}
                  required
                  variant="outlined"
                />
                <lable>CLIENT GRADE</lable>
                <SelectFormsy
                  className="flex flex-col justify-center"
                  name="related"
                  label=""
                  value="Select All"
                  variant="outlined"
                >
                  <MenuItem value="0">
                    <em>0min</em>
                  </MenuItem>
                  <MenuItem value="5">5min</MenuItem>
                  <MenuItem value="10">10min</MenuItem>
                  <MenuItem value="15">15min</MenuItem>
                </SelectFormsy>
                <br />
                <lable>CONVENTION (DISCOUNT)</lable>

                <SelectFormsy
                  className="flex flex-col justify-center"
                  name="related"
                  label=""
                  value="Select All"
                  variant="outlined"
                >
                  <MenuItem value="0">
                    <em>0min</em>
                  </MenuItem>
                  <MenuItem value="5">5min</MenuItem>
                  <MenuItem value="10">10min</MenuItem>
                  <MenuItem value="15">15min</MenuItem>
                </SelectFormsy>
                <br />
                <lable>POLITICAL PERSUASION</lable>
                <TextField
                  style={{ width: "100%" }}
                  className="my-16"
                  type="text"
                  name="political_persuasion"
                  validations={{
                    minLength: 4
                  }}
                  validationErrors={{
                    minLength: "Min character length is 4"
                  }}
                  required
                  variant="outlined"
                />
                <div style={{display:"flex", justifyContent:"flex-end"}}>
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
                    color="secondary"
                    className="mx-auto my-16"
                    aria-label="LOG IN"
                  >
                    SAVE
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Formsy>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Address);
