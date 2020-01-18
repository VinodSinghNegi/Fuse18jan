import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import { Card, CardContent, Typography, Button, Icon } from "@material-ui/core";
import classNames from "classnames";
import AddModal from "./AddModal";
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
class OrderInvoice extends Component {
  state = {
    order: {
      services: [
        {
          servicename: "HAIRWASH",
          clientName: "SABRINA",
          qty: "1",
          price: "10.00",
          status: true
        },
        {
          servicename: "HAIRCUT",
          clientName: "GIADA",
          qty: "2",
          price: "15.00",
          status: true
        },
        {
          servicename: "COLOUR",
          clientName: "FRANCA",
          qty: "1",
          price: "14.00",
          status: false
        },
        {
          servicename: "HAIRWASH",
          clientName: "HALAA",
          qty: "5",
          price: "20.00",
          status: true
        }
      ],

      products: [
        {
          productName: "SHAMPOO",
          clientName: "SABRINA",
          qty: "5",
          price: "20.00",
          status: true
        },
        {
          productName: "CONDITIONER",
          clientName: "GIADA",
          qty: "1",
          price: "20.00",
          status: true
        },
        {
          productName: "HAND CREAM",
          clientName: "SABRINA",
          qty: "6",
          price: "35.00",
          status: false
        }
      ]
    },
    totalamount: {
      services: 0,
      products: 0,
      total: 0
    },
    showService: false,
    modalData: ""
  };
  async componentDidMount() {
    let sub1 = this.state.order.services.map(e => e.price * e.qty);
    sub1 = sub1.reduce((a, b) => a + b);
    let sub2 = this.state.order.products.map(e => e.price * e.qty);
    sub2 = sub2.reduce((a, b) => a + b);
    await this.setState({
      totalamount: {
        ...this.state.totalamount,
        services: sub1,
        products: sub2,
        total: sub1 + sub2
      }
    });
  }

  // identity=="services"? await this.setState({totalamount:{...this.state.totalamount,services:tota}}):await this.setState({totalamount:{...this.state.totalamount,products:tota}})
  handleModalClose = () => {
    this.setState({ showService: false });
  };
  render() {
    const { order } = this.state;
    const { classes } = this.props;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });

    return (
      <div className={classNames(classes.root, "p-0")}>
        {/* <Fragment> */}
        {order && (
          <Card className={classNames(classes.card, "mx-auto")}>
            <CardContent
              className={classNames(classes.cardContent, "p-88 print:p-0")}
            >
              <h2>{`Today,${CurrentDate}`}</h2>
              <div className="mt-64">
                <h1>SERVICES</h1>
                <table className="simple invoice-table">
                  <thead>
                    <tr>
                      <th>SERVICES</th>
                      <th>CLIENTS</th>
                      <th className="text-right">QUANTITY</th>
                      <th className="text-right">PRICE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.services.map(service => (
                      <tr key={service.clientName}>
                        <td>
                          <Typography variant="subtitle1">
                            {service.servicename}
                          </Typography>
                        </td>
                        <td>
                          {/* {formatter.format(service.se)} */}
                          {service.clientName}
                        </td>
                        <td className="text-right">{service.qty}</td>
                        <td className="text-right">
                          {formatter.format(service.price)}
                        </td>
                        <td className="text-right">
                          {/* {formatter.format(service.se)} */}
                          {service.status ? (
                            <>
                              <Button style={{ backgroundColor: "lightgreen" }}>
                                CARRIEDOUT
                              </Button>
                              <Button style={{ backgroundColor: "lightgrey" }}>
                                RECOMMENDED
                              </Button>
                            </>
                          ) : (
                            [
                              <Button style={{ backgroundColor: "lightgrey" }}>
                                CARRIEDOUT
                              </Button>,
                              <Button style={{ backgroundColor: "orange" }}>
                                RECOMMENDED
                              </Button>
                            ]
                          )}
                        </td>
                        <td className="text-right">
                          {formatter.format(service.price * service.qty)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="simple mt-32">
                  <tbody>
                    <tr>
                      <td className="text-left">
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          <Button
                            onClick={() =>
                              this.setState({
                                showService: true,
                                modalData: "services"
                              })
                            }
                          >
                            <Icon>add</Icon>
                            ADD SERVICES
                          </Button>
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          SUBTOTAL
                        </Typography>
                      </td>
                      <td className="text-right">
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {formatter.format(this.state.totalamount.services)}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-64">
                <h1>PRODUCTS</h1>
                <table className="simple invoice-table">
                  <thead>
                    <tr>
                      <th>PRODUCTS</th>
                      <th>CLIENTS</th>
                      <th className="text-right">QUANTITY</th>
                      <th className="text-right">PRICE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map(product => (
                      <tr key={product.productName}>
                        <td>
                          <Typography variant="subtitle1">
                            {product.productName}
                          </Typography>
                        </td>
                        <td>
                          {/* {formatter.format(product.se)} */}
                          {product.clientName}
                        </td>
                        <td className="text-right">{product.qty}</td>
                        <td className="text-right">
                          {formatter.format(product.price)}
                        </td>
                        <td className="text-right">
                          {/* {formatter.format(product.se)} */}
                          {product.status ? (
                            <>
                              <Button style={{ backgroundColor: "lightgreen" }}>
                                SOLD
                              </Button>
                              <Button style={{ backgroundColor: "lightgrey" }}>
                                RECOMMENDED
                              </Button>
                            </>
                          ) : (
                            [
                              <Button style={{ backgroundColor: "lightgrey" }}>
                                SOLD
                              </Button>,
                              <Button style={{ backgroundColor: "orange" }}>
                                RECOMMENDED
                              </Button>
                            ]
                          )}
                        </td>
                        <td className="text-right">
                          {formatter.format(product.price * product.qty)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="simple mt-32">
                  <tbody>
                    <tr>
                      <td className="text-left">
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          <Button
                            onClick={() =>
                              this.setState({
                                showService: true,
                                modalData: "products"
                              })
                            }
                          >
                            <Icon>add</Icon>
                            ADD PRODUCT
                          </Button>
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          SUBTOTAL
                        </Typography>
                      </td>
                      <td className="text-right">
                        <Typography
                          className="font-medium"
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          {formatter.format(this.state.totalamount.products)}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="simple mt-32">
                  <tbody>
                    <tr>
                      <td>
                        <Typography
                          className="font-light"
                          variant="h4"
                          color="textSecondary"
                        >
                          TOTAL
                        </Typography>
                      </td>
                      <td className="text-right">
                        <Typography
                          className="font-light"
                          variant="h4"
                          color="textSecondary"
                        >
                          {formatter.format(this.state.totalamount.total)}
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="mx-auto my-16"
                        aria-label="LOG IN"
                        style={{ float: "right" }}
                      >
                        SEND TO CHECKOUT
                      </Button>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <Typography className="mb-24 print:mb-12" variant="body1">
                    CONVENTION (DISCOUNT) TO BE APPLIED AT THE SERVICE DESK
                  </Typography>

                  <Typography
                    className="font-medium mb-64"
                    variant="caption"
                    color="textSecondary"
                  >
                    Business convention 20%
                  </Typography>
                </div>
              </div>
            </CardContent>
            {this.state.showService && (
              <AddModal
                showService={this.state.showService}
                handleModalClose={this.handleModalClose}
                data={this.state.modalData}
              />
            )}
          </Card>
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(OrderInvoice);
