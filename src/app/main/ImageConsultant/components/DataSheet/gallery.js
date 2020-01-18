import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import { Card, CardContent, Typography, Button, Icon } from "@material-ui/core";
import classNames from "classnames";

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
class Gallery extends Component {
  state = {
    data: [
      [
        {
          date: "21/10/2018",
          Name: "SABRINA ",
          image: "assets/images/avatars/Mai.jpg"
        },
        {
          date: "21/10/2018",
          Name: "SABRINA",
          image: "assets/images/avatars/Mai.jpg"
        },
        {
          date: "21/10/2018",
          Name: "SABRINA",
          image: "assets/images/avatars/Mai.jpg"
        }
      ],
      [
        {
          date: "21/10/2018",
          Name: "SABRINA",
          image: "assets/images/avatars/Mai.jpg"
        },
        {
          date: "21/10/2018",
          Name: "SABRINA",
          image: "assets/images/avatars/Mai.jpg"
        },
        {
          date: "21/10/2018",
          Name: "SABRINA",
          image: "assets/images/avatars/Mai.jpg"
        }
      ]
    ]
  };

  // identity=="services"? await this.setState({totalamount:{...this.state.totalamount,services:tota}}):await this.setState({totalamount:{...this.state.totalamount,products:tota}})
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

                  <th className="text-center">
                    <Icon className="text-2xl">remove_red_eye</Icon>
                  </th>
                </tr>
              </thead>

              {data.map(dataitems => (
                <tbody>
                  {dataitems.map(dataitem => (
                    <tr key={dataitem.date}>
                      <td>{dataitem.date}</td>
                      <td className="text-left">{dataitem.Name}</td>
                      <td className="text-right">
                        <img
                          style={{
                            height: "50px",
                            width: "50px"
                          }}
                          src={dataitem.image}
                          alt="img"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Gallery);
