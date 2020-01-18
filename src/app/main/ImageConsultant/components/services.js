import React, { Component } from "react";
import { withStyles, TextField, Button, Divider } from "@material-ui/core";
import Formsy from "formsy-react";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

interface Props {}

interface State {}

class Services extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rightcontent: 0
    };
  }

  setrightcontent = rightcontent => {
    debugger;
    this.setState({ rightcontent: rightcontent });
  };
  render() {
    return (
      <React.Fragment>
        <Formsy
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
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                className="p-3 mr-5"
                variant="contained"
                color="primary"
                style={{
                  width: "100%",
                  color: "white"
                }}
              >
                START
              </Button>
              <Button
                variant="contained"
                style={{ width: "100%", background: "#F44336", color: "white" }}
              >
                STOP
              </Button>
            </div>
            <br />
            <div className="flex flex-col">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <lable>HAIRWASH</lable>
                <div
                  className="text-center m-5"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px",
                    width: "50%"
                  }}
                >
                  JOHN DOE
                </div>
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <lable>HAIRCUT</lable>
                <div
                  className="text-center  m-5"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px",
                    width: "50%"
                  }}
                >
                  JEENE DOE
                </div>
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <lable>COLOUR</lable>
                <div
                  className="text-center m-5"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "grey",
                    color: "white",
                    padding: "5px",
                    width: "50%"
                  }}
                >
                  NOT BOOKED
                </div>
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <lable>BLOW DRY</lable>
                <div
                  className="text-center m-5"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "grey",
                    color: "white",
                    padding: "5px",
                    width: "50%"
                  }}
                >
                  NOT BOOKED
                </div>
              </span>
            </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bolder"
              }}
            >
              &euro;560
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%", color: "white" }}
            >
              VIEW/ADD/EDIT SERVICES
            </Button>
          </div>
        </Formsy>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Services);
