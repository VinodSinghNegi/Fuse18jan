import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, Button, Divider } from "@material-ui/core";

class Product extends React.Component {
  state = {
    data: [
      { name: "MILAN", qty: 11, price: 50 },
      { name: "MILAN", qty: 11, price: 50 },
      { name: "MILAN", qty: 11, price: 50 }
    ],
    total: null
  };
  async componentDidMount() {
    let sub1 = this.state.data.map(e => e.price);
    sub1 = sub1.reduce((a, b) => a + b);
    this.setState({ total: sub1 });
  }

  render() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });
    return (
      <>
        <div
          style={{
            padding: "5px",
            minHeight: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            {this.state.data.map(e => (
              <div style={{ width: "100%" }}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  bgcolor="background.paper"
                  mt={1}
                >
                  <Box
                    display="flex"
                    m={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <b>{e.name}</b>
                  </Box>
                  <Box display="flex" flexDirection="row">
                    <Box
                      display="flex"
                      p={1}
                      m={1}
                      color="white"
                      bgcolor="grey.500"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {e.qty}
                    </Box>
                    <Box
                      display="flex"
                      py={1}
                      px={3}
                      m={1}
                      color="white"
                      bgcolor="grey.500"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {formatter.format(e.price)}
                    </Box>
                  </Box>
                </Box>
              </div>
            ))}
          </div>
          <div>
            <Divider />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bolder"
              }}
            >
              TOTAL SERVICES
            </div>
            {/* total price */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bolder"
              }}
            >
              {formatter.format(this.state.total)}
            </div>

            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%", color: "white" }}
            >
              VIEW/ADD/EDIT SERVICES
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
