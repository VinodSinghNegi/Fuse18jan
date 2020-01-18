import React, { Fragment, Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const styles = theme => ({});

interface Props {}

interface State {}

class BookingWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowServicePrices: true
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    return (
      <React.Fragment>
        <Paper
          style={{
            padding: "40px",
            minHeight: "100%",
            justifyContent: "space-between"
          }}
        >
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                label="Show Service prices on Booking widget?"
                control={
                  <Switch
                    checked={this.state.ShowServicePrices}
                    value="ShowServicePrices"
                    onChange={this.handleChange("ShowServicePrices")}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Paper>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(BookingWidget);
