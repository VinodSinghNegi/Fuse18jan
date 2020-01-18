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
        name: "Vinod",
        image: "assets/images/avatars/Harper.jpg",
        data: [
          {
            from: new Date(2020, 1, 14, 10, 0, 0, 0),
            to: new Date(2020, 1, 14, 12, 0, 0, 0)
          },
          {
            from: new Date(2020, 1, 14, 12, 0, 0, 0),
            to: new Date(2020, 1, 14, 14, 0, 0, 0)
          },
          {
            from: new Date(2020, 1, 15, 10, 0, 0, 0),
            to: new Date(2020, 1, 15, 12, 0, 0, 0)
          },
          {
            from: new Date(2020, 1, 16, 10, 0, 0, 0),
            to: new Date(2020, 1, 16, 12, 0, 0, 0)
          }
        ]
      },
      {
        name: "Rahul",
        image: "assets/images/avatars/Velazquez.jpg",
        data: [
          {
            from: new Date(2020, 1, 13, 10, 0, 0, 0),
            to: new Date(2020, 1, 13, 12, 0, 0, 0)
          }
        ]
      }
    ],
    open: false,
    shiftData: {},
    todaysDate: 0,
    todaysMonth: 0,
    todaysYear: 0,
    showdate: 1,
    showday: 0,
    daysInMonth: 0,
    month: 0,
    year: 0
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

    const daysInMonth = new Date(
      this.state.year,
      this.state.month + 1,
      0
    ).getDate();

    await this.setState({ daysInMonth: daysInMonth });
  };

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
  date = j => {
    let sday = this.state.showdate - this.state.showday + j;
    if (sday > this.state.daysInMonth) {
      return sday - this.state.daysInMonth;
    }
    if (sday < 1) {
      const daysInPrevMonth = new Date(
        this.state.year,
        this.state.month,
        0
      ).getDate();

      return sday + daysInPrevMonth;
    }
    return sday;
  };
  showToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    this.setState({ showdate: currentDate, month: month, year: year });
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  createEvent = async data => {
  console.log(data);
    await this.setState({userdata:this.state.userdata.map(E=>{
      if(E.name===data.name){
      E.data=data.event
        return E
      }
      return E
    })})
  console.log(this.state.userdata);
  
  };

  clickedCell = async (user, day) => {
    const clickedDate = this.date(day);
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
  };

  render() {
    return (
      <React.Fragment>
        {this.state.open && (
          <EventModal
            createEvent={this.createEvent}
            data={this.state.shiftData}
            open={this.state.open}
            closeButton={this.handleOpen}
          />
        )}
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {this.state.monthName[this.state.month]}
            &nbsp;{this.state.year}
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
          <tbody>
            <tr
              style={{
                border: "1px solid black",
                borderCollapse: "collapse"
              }}
            >
              <td style={{ display: "flex", justifyContent: "center" }}>
                STAFF
              </td>
              {this.state.weekdays.map((day, j) => (
                <th
                  key={j}
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse"
                  }}
                >
                  {day}
                  <br />
                  {this.state.todaysDate === this.date(j) &&
                  this.state.month === this.state.todaysMonth &&
                  this.state.year === this.state.todaysYear ? (
                    <div style={{ background: "grey" }}>{this.date(j)}</div>
                  ) : (
                    <div>{this.date(j)}</div>
                  )}
                  {/* {this.state.monthName[this.state.month]} */}
                </th>
              ))}
            </tr>
            {/*///////////////////////////*/}

            {this.state.userdata.map((user, i) => (
              <tr key={i}>
                <td
                  style={{
                    // display: "flex",
                    justifyContent: "center",
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "20px"
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
                {this.state.weekdays.map((day, k) => (
                  <td
                    key={day}
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
                      user.data.map(shift =>
                        shift.from.getDate() === this.date(k) ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              background: "cyan"
                            }}
                          >
                            {shift.from.getHours()}-{shift.to.getHours()}
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
