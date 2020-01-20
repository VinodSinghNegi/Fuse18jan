import React, { Component } from "react";
import { Button } from "@material-ui/core";
import EventModal from "./EventModal";
class Schedule extends Component {
  state = {
    weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthName: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JULY",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC"
    ],
    userdata: [
      {
        name: "Harper",
        image: "assets/images/avatars/Harper.jpg",
        data: []
      },
      {
        name: "Velaz",
        image: "assets/images/avatars/Velazquez.jpg",
        data: []
      }
    ],
    open: false,
    shiftData: {},
    todaysDate: null,
    todaysMonth: null,
    todaysYear: null,
    showdate: null,
    showday: null,
    daysInMonth: null,
    month: null,
    year: null
  };
  componentDidMount = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const currentDate = date.getDate();
    const currentDay = date.getDay();

    await this.setState({
      showdate: currentDate,
      showday: currentDay,
      month: month,
      year: year,
      todaysDate: currentDate,
      todaysMonth: month,
      todaysYear: year
    });

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    await this.setState({ daysInMonth: daysInMonth });
  };

  //////////// Methods /////////////////////////
  forwardDate = async () => {
    await this.setState({ showdate: this.state.showdate + 7 });

    if (this.state.showdate > this.state.daysInMonth) {
      await this.setState({
        showdate: this.state.showdate - this.state.daysInMonth,
        month: this.state.month + 1
      });

      if (this.state.month > 11) {
        await this.setState({ month: 0, year: this.state.year + 1 });
      }
      const daysInMonth = new Date(
        this.state.year,
        this.state.month + 1,
        0
      ).getDate();

      await this.setState({ daysInMonth: daysInMonth });
    }
  };
  //////////////////////////////////////////////////////
  backwardDate = async () => {
    await this.setState({ showdate: this.state.showdate - 7 });

    if (this.state.showdate < 1) {
      await this.setState({ month: this.state.month - 1 });
      if (this.state.month < 0) {
        await this.setState({ month: 11, year: this.state.year - 1 });
      }

      const daysInPrevMonth = new Date(
        this.state.year,
        this.state.month + 1,
        0
      ).getDate();

      await this.setState({ daysInMonth: daysInPrevMonth });
      await this.setState({
        showdate: this.state.showdate + this.state.daysInMonth
      });
    }
  };
  //////////////////////////////////////////////////////
  date = j => {
    if (this.state.showdate) {
      var date = this.state.showdate - this.state.showday + j;
      var month = this.state.month;
      var year = this.state.year;

      if (this.state.daysInMonth && date > this.state.daysInMonth) {
        if (month === 11) {
          month = -1;
        }
        return {
          date: date - this.state.daysInMonth,
          month: month + 1,
          year
        };
      }
      if (date < 1) {
        const daysInPrevMonth = new Date(
          this.state.year,
          this.state.month
        ).getDate();

        return { date: date + daysInPrevMonth, month: month - 1, year };
      }

      return { date, month, year };
    }
  };
  //////////////////////////////////////////////////////
  showToday = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    await this.setState({ showdate: currentDate, month: month, year: year });
  };
  //////////////////////////////////////////////////////
  handleOpen = async () => {
    await this.setState({ open: !this.state.open });
  };
  //////////////////////////////////////////////////////
  createEvent = async data => {
    let getuser = [];
    this.state.userdata.map(user => {
      if (user.name === data.name) {
        return (getuser = user.data);
      }
    });
    if (data.event.length > 0) {
      getuser = getuser.filter(user => {
        let prevShift = user.from;
        let newShift = data.event[0].from;
        if (
          prevShift.getDate() === newShift.getDate() &&
          prevShift.getMonth() === newShift.getMonth() &&
          prevShift.getFullYear() === newShift.getFullYear()
        ) {
          return false;
        }
        return true;
      });

      getuser = [...getuser, ...data.event];
      await this.setState({
        userdata: this.state.userdata.map(user => {
          if (user.name === data.name) {
            user.data = getuser;
            return user;
          }
          return user;
        })
      });
    } else {
      await this.setState({
        userdata: this.state.userdata.map(user => {
          if (user.name === data.name) {
            user.data = [];
            return user;
          }
          return user;
        })
      });
    }
  };
  //////////////////////////////////////////////////////
  clickedCell = async (user, day) => {
    const clickedDate = this.date(day).date;
    const clickedMonth = this.date(day).month;
    const clickedYear = this.date(day).year;

    const newDate = new Date(clickedYear, clickedMonth, clickedDate);

    if (newDate >= new Date().setHours(0, 0, 0, 0)) {
      var event = user.data.filter(shift => {
        return shift.from.getDate() === clickedDate;
      });
      var data = {
        name: user.name,
        date: clickedDate,
        month: this.state.month,
        year: this.state.year,
        event: event
      };
      await this.setState({ shiftData: data });
    } else {
      this.setState({ open: false });
      return window.alert("Sorry You cannot edit past schedules");
    }
  };

  render() {
    //////// Destructering /////////////////
    const {
      weekdays,
      monthName,
      userdata,
      open,
      shiftData,
      todaysDate,
      todaysMonth,
      todaysYear,
      showdate,
      showday,
      daysInMonth,
      month,
      year
    } = this.state;

    /////////////////// Return /////////////////////////
    return (
      <React.Fragment>
        {open && (
          <EventModal
            createEvent={this.createEvent}
            data={shiftData}
            open={open}
            closeButton={this.handleOpen}
          />
        )}
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {year}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={this.backwardDate}>
              prev
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showToday}
            >
              Today
            </Button>
            <Button variant="contained" onClick={this.forwardDate}>
              next
            </Button>
          </div>
        </div>
        <br />
        <table
          style={{
            width: "100%",
            border: "1px solid black",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse"
              }}
            >
              <th style={{ display: "flex", justifyContent: "center" }}>
                STAFF
              </th>
              {weekdays.map((day, j) => (
                <th
                  key={j}
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse"
                  }}
                >
                  {todaysDate &&
                  todaysDate === this.date(j).date &&
                  month === todaysMonth &&
                  year === todaysYear ? (
                    <div style={{ background: "grey" }}>
                      {day}
                      <br />
                      {this.date(j) && this.date(j).date}
                      <br />
                      {this.date(j) && this.state.monthName[this.date(j).month]}
                    </div>
                  ) : (
                    <div>
                      {day}
                      <br />
                      {this.date(j) && this.date(j).date}
                      <br />
                      {this.date(j) && this.state.monthName[this.date(j).month]}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          {/*///////////////////////////*/}
          <tbody>
            {userdata.map((user, i) => (
              <tr key={i}>
                <td
                  style={{
                    // display: "flex",
                    justifyContent: "center",
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "50px"
                  }}
                >
                  <img
                    src={user.image}
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px"
                    }}
                    alt="user"
                  />
                  {user.name}
                </td>
                {weekdays.map((day, k) => (
                  <td
                    key={k}
                    style={{
                      justifyContent: "center",
                      border: "1px solid black",
                      borderCollapse: "collapse"
                    }}
                    onClick={e => {
                      this.handleOpen();
                      this.clickedCell(user, k);
                    }}
                  >
                    {user.data.length > 0 &&
                      user.data.map((shift, p) =>
                        shift.from.getDate() === this.date(k).date &&
                        shift.from.getMonth() === month &&
                        shift.from.getFullYear() === year ? (
                          <div
                            key={p}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              background: "cyan"
                            }}
                          >
                            {shift.from.getHours()}:{shift.from.getMinutes()}-
                            {shift.to.getHours()}:{shift.to.getMinutes()}
                          </div>
                        ) : (
                          ""
                        )
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Schedule;
