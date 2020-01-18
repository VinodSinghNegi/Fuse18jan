import React, { Component } from "react";
import { Paper, Button, Modal, Divider } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

class EventModal extends Component {
  state = {
    event: [],
    shiftFrom: new Date(),
    shiftTo: new Date(),
    displayDate: new Date(),
    flag: false
  };

  shiftTimeFrom = async time => {
    await this.setState({ shiftFrom: time });
  };

  shiftTimeTo = async time => {
    await this.setState({ shiftTo: time });
    var newEvent = {
      from: this.state.shiftFrom,
      to: this.state.shiftTo
    };
    await this.setState({ event: [...this.state.event, newEvent] });
  };

  render() {
    const { name, date, month, year, event } = this.props.data;
    if (event.length > 0 && this.state.flag === false) {
      this.setState({
        event: event,
        displayDate: event[0].from,
        flag: true
      });
    } else if (!event.length > 0 && this.state.flag === false) {
      this.setState({
        shiftFrom: new Date(year, month, date, 0, 0, 0, 0),
        shiftTo: new Date(year, month, date, 0, 0, 0, 0),
        displayDate: new Date(year, month, date, 0, 0, 0, 0),
        flag: true
      });
    }
    const onSaveShift = () => {
      var data = {
        name: name,
        date: date,
        month: month,
        year: year,
        event: this.state.event
      };
      this.props.createEvent(data);
      this.props.closeButton();
    };
    return (
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        open={this.props.open}
        onClose={this.props.closeButton}
      >
        <Fade in={this.props.open}>
          <Paper>
            <div
              style={{
                background: "#192D3E",
                padding: "10px",
                color: "white",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>
                <p>Edit Shift for {name}</p>
                <p>
                  {this.state.displayDate.getDate()}-
                  {this.state.displayDate.getMonth() + 1}-
                  {this.state.displayDate.getFullYear()}
                </p>
              </div>

              <Button
                onClick={this.props.closeButton}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "white",
                  padding: "0px"
                }}
              >
                X
              </Button>
            </div>
            <div className="max-w-md p-5">
              {this.state.event.length > 0 ? (
                this.state.event.map(event => (
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="SHIFT START"
                      value={event.from}
                      onChange={this.shiftTimeFrom}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />

                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="SHIFT END"
                      value={event.to}
                      onChange={this.shiftTimeTo}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                ))
              ) : (
                <>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="SHIFT START"
                      value={this.state.shiftFrom}
                      onChange={this.shiftTimeFrom}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />

                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="SHIFT END"
                      value={this.state.shiftTo}
                      onChange={this.shiftTimeTo}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </>
              )}
            </div>
            <Button
              variant="contained"
              className={"m-10"}
              color="primary"
              onClick={this.props.closeButton}
            >
              Add Shift
            </Button>
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                className={"m-10"}
                onClick={this.props.closeButton}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={"m-10"}
                onClick={onSaveShift}
              >
                Save
              </Button>
            </div>
          </Paper>
        </Fade>
      </Modal>
    );
  }
}
export default EventModal;
