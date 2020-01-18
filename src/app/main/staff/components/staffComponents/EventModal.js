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
    length: 0,
    shiftFrom: new Date(),
    shiftTo: new Date(),
    displayDate: new Date(),
    flag: false
  };
  componentDidMount = async () => {
    const { date, month, year, event } = this.props.data;
    await this.setState({
      shiftFrom: new Date(year, month, date),
      shiftTo: new Date(year, month, date),
      displayDate: new Date(year, month, date),
      length: event.length
    });

    if (event.length > 0) {
      await this.setState({
        event: event,
        displayDate: event[0].from
      });
    }
  };
  shiftTimeFrom = () => {};
  shiftTimeTo = () => {};

  editPrevShiftFrom = async (time, i) => {
    await this.setState({
      event: this.state.event.map((shift, j) => {
        if (i === j) {
          shift.from = time;
          return shift;
        }
        return shift;
      })
    });
  };
  editPrevShiftTo = async (time, i) => {
    await this.setState({
      event: this.state.event.map((shift, j) => {
        if (i === j) {
          shift.to = time;
          return shift;
        }
        return shift;
      })
    });
  };

  createNewEvent = async () => {
    await this.setState({
      event: [
        ...this.state.event,
        { from: this.state.displayDate, to: this.state.displayDate }
      ]
    });
  };
  render() {
    const { name, date, month, year } = this.props.data;

    const onSaveShift = async () => {
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
                <p>
                  {this.state.event.length > 0 ? "Edit" : "Add"}&nbsp;Shift
                  for&nbsp;
                  {name}
                </p>
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
              {this.state.event.length > 0
                ? this.state.event.map((event, i) => (
                    <MuiPickersUtilsProvider utils={DateFnsUtils} key={i}>
                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="SHIFT START"
                        inputVariant="outlined"
                        value={event.from}
                        onChange={this.shiftTimeFrom}
                        onAccept={time => this.editPrevShiftFrom(time, i)}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                      />

                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="SHIFT END"
                        inputVariant="outlined"
                        value={event.to}
                        onChange={this.shiftTimeTo}
                        onAccept={time => this.editPrevShiftTo(time, i)}
                        KeyboardButtonProps={{
                          "aria-label": "change time"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  ))
                : ""}
            </div>

            <Button
              variant="contained"
              className={"m-10"}
              color="primary"
              onClick={this.createNewEvent}
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
                disabled={this.state.event.length > 0 ? false : true}
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
