import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";

const options = [
  "24hours",
  "00:00",
  "00:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30"
];

const styles = theme => ({
  table: {
    minWidth: 500
  }
});

class OpeningTimes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rows: [
        {
          day: "Monday",
          toggle: true,
          opensAt: "12:30",
          closeAt: "14:00"
        },
        {
          day: "Tuesday",
          toggle: true,
          opensAt: "11:30",
          closeAt: "04:00"
        },
        {
          day: "Wednesday",
          toggle: true,
          opensAt: "10:30",
          closeAt: "14:00"
        },
        {
          day: "Thursday",
          toggle: true,
          opensAt: "12:30",
          closeAt: "04:00"
        },
        {
          day: "Friday",
          toggle: true,
          opensAt: "02:30",
          closeAt: "14:30"
        },
        {
          day: "Saturday",
          toggle: false,
          opensAt: "10:30",
          closeAt: "14:00"
        },
        {
          day: "Sunday",
          toggle: false,
          opensAt: "11:30",
          closeAt: "23:00"
        }
      ]
    };
  }

  handleChange = name => event => {
    let arr = this.state.rows.map(e => {
      if (e.day === name.row.day) {
        e.toggle = !e.toggle;
      }
      return e;
    });
    this.setState({ rows: arr });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClick = name => {
    let arr = this.state.rows.map(e => {
      if (e.day === name.row.day) {
        e.toggle = !e.toggle;
      }
      return e;
    });
    this.setState({ rows: arr });
  };

  render() {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table
            className={this.props.table}
            aria-label="custom pagination table"
          >
            <TableBody>
              {this.state.rows.map(row => (
                <TableRow key={row.day}>
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Switch
                      checked={row.toggle}
                      onChange={this.handleChange({ row })}
                      value={row.toggle}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {row.toggle ? "Open" : "Closed"}
                  </TableCell>
                  {row.toggle ? (
                    <React.Fragment>
                      {" "}
                      <TableCell align="right">
                        {" "}
                        <FormControl>
                          <InputLabel
                            shrink
                            htmlFor="age-native-label-placeholder"
                          >
                            Opens at
                          </InputLabel>
                          <NativeSelect
                          // value={state.age}
                          // onChange={handleChange('age')}
                          >
                            <option value="">{row.opensAt}</option>
                            {options.map(option => (
                              <option key={option}>{option}</option>
                            ))}
                          </NativeSelect>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">
                        <FormControl>
                          <InputLabel
                            shrink
                            htmlFor="age-native-label-placeholder"
                          >
                            Closed at
                          </InputLabel>
                          <NativeSelect
                          // value={state.age}
                          // onChange={handleChange('age')}
                          >
                            {" "}
                            <option value="">{row.closeAt}</option>
                            {options.map(option => (
                              <option key={option}>{option}</option>
                            ))}
                          </NativeSelect>
                        </FormControl>
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        <Button onClick={this.handleClickOpen}>
                          ADD HOURS
                        </Button>
                      </TableCell>{" "}
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Would you like to copy these hours to other days?"}
          </DialogTitle>
          <DialogContent>
            {this.state.rows.map(row => (
              <Chip
                key={row.day}
                label={row.day}
                onClick={() => this.handleClick({ row })}
                clickable
                color={row.toggle ? "primary" : "default"}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              NO
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(OpeningTimes);
