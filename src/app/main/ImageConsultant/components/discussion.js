import React, { Component } from "react";
import { withStyles, TextField, MenuItem } from "@material-ui/core";
// import { TextField } from "@fuse";
import { SelectFormsy } from "@fuse";
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

class Discussion extends Component<Props, State> {
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
          style={{ padding: "10px" }}
        >
          <SelectFormsy
            className="flex flex-col justify-center"
            name="related"
            label="NPS"
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
          <div style={{ display: "flex" }}>
            <span>
              <TextField
                style={{ width: "100%", paddingRight: "2px" }}
                className="my-16"
                label="STAR SIGN"
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
            </span>
            <span>
              <TextField
                style={{ width: "100%", paddingLeft: "2px" }}
                className="my-16"
                type="text"
                label="V-C-a MAP"
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
            </span>
          </div>
          <TextField
            style={{ width: "100%" }}
            className="my-16"
            type="email"
            label="POLITICS"
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

          <TextField
            style={{ width: "100%" }}
            className="my-16"
            label="DISCOUNT"
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

          <TextField
            style={{ width: "100%", boxSizing: "border-box", margin: "5px 0" }}
            className="my-16"
            label="INTERESTS"
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
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Discussion);
