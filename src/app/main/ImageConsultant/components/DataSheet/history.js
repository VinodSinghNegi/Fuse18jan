import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import { Card, CardContent, Typography, Button, Icon } from "@material-ui/core";
import classNames from "classnames";
// import AddModal from "./AddModal";
var moment = require("moment");
var CurrentDate = moment().format("ddd MMM DD YYYY hh:mm");

const styles = theme => ({
  root: {
    flex: "1 0 auto",
    "@media print": {
      transform: "scale(0.9)",
      transformOrigin: "top"
    },
    "& table ": {
      "& th:first-child, & td:first-child": {
        paddingLeft: 0 + "!important"
      },
      "& th:last-child, & td:last-child": {
        paddingRight: 0 + "!important"
      }
    }
  },
  card: {
    width: 1020,
    "@media print": {
      width: "100%!important",
      boxShadow: "none"
    }
  },
  cardContent: {},
  divider: {
    width: 1,
    backgroundColor: theme.palette.divider,
    height: 144
  },
  seller: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    marginRight: -88,
    paddingRight: 66,
    width: 480,
    "& .divider": {
      backgroundColor: theme.palette.getContrastText(
        theme.palette.primary.dark
      ),
      opacity: 0.5
    }
  }
});
class History extends Component {
  state = {
    data: [
      [
        {
          date: "21/10/2018",
          clientName: "SABRINA ",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        },
        {
          date: "21/10/2018",
          clientName: "SABRINA",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        },
        {
          date: "21/10/2018",
          clientName: "SABRINA",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        }
      ],
      [
        {
          date: "21/10/2018",
          clientName: "SABRINA",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        },
        {
          date: "21/10/2018",
          clientName: "SABRINA",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        },
        {
          date: "21/10/2018",
          clientName: "SABRINA",
          qty: "1",
          soldBy: "hena",
          price: "10.00"
        }
      ]
    ]
  };

  handleModalClose = () => {
    this.setState({ showService: false });
  };
  render() {
    const { data } = this.state;
    const { classes } = this.props;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });

    return (
      <div className={classNames(classes.root, "p-0")}>
        {data && (
          <div className="mt-8">
            <table className="simple invoice-table">
              <thead>
                <tr
                  style={{
                    backgroundColor: "#28A8EA",
                    color: "white",
                    fontWeight: "2px",
                    fontFamily: "sans-serif",
                    marginRight: "1px"
                  }}
                >
                  <th className="text-center">Date</th>
                  <th>Name</th>
                  <th className="text-right">Qty</th>
                  <th className="text-right">SoldBy</th>
                  <th className="text-center">Price</th>
                </tr>
              </thead>

              {data.map(dataitems => (
                <tbody style={{padding:"5px"}}>
                  {dataitems.map(dataitem => (
                    <tr key={dataitem.date}>
                      <td>{dataitem.date}</td>
                      <td className="text-right">{dataitem.clientName}</td>
                      <td className="text-right">{dataitem.qty}</td>
                      <td className="text-right">{dataitem.soldBy}</td>
                      <td className="text-right">{dataitem.price}</td>
                    </tr>
                  ))}
                  <tr
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      fontFamily: "sans-serif"
                    }}
                  >
                    <td></td>
                    <td>TOTAL</td>
                    <td></td>
                    <td></td>
                    <td>420</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(History);
