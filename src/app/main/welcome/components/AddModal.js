import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

import {
  Button,
  MenuItem,
  Radio,
  Tabs,
  Icon,
  Tab,
  TextField,
  withStyles
} from "@material-ui/core";
import {
  TextFieldFormsy,
  CheckboxFormsy,
  RadioGroupFormsy,
  SelectFormsy,
  FuseChipSelectFormsy
} from "@fuse";
import Formsy from "formsy-react";
const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "80%",
    height: "80%"
  },
  root: {
    flexGrow: 1
  }
});

interface Props {}

interface State {}

class AddModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      clientName: "",
      qty: "",
      price: ""
    };
  }

  render() {
    const { classes, data } = this.props;

    //    const { showService} = this.state;
    return (
      <React.Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.props.showService}
          onClose={this.props.handleModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.props.showService}>
            <div className={classes.paper}>
              <div
                style={{
                  background: "#192D3E",
                  padding: "15px",
                  display: "flex",
                  color: "white"
                }}
              >
                <Grid xs={6} style={{ padding: "5px" }}>
                  ADD {data === "services" ? "SERVICE" : "PRODUCT"}
                </Grid>
                <Grid xs={6} style={{ padding: "5px" }}>
                  <CloseIcon
                    onClick={this.props.handleModalClose}
                    style={{ float: "right", zIndex: "100" }}
                  />
                </Grid>
              </div>
              <Formsy className="flex flex-col justify-center">
                <Grid container style={{ padding: "5px" }}>
                  <Grid xs={6} style={{ padding: "5px" }}>
                    <lable>{data === "services" ? "Service" : "Product"}</lable>
                    <TextField
                      style={{ width: "100%" }}
                      className="my-16"
                      type="text"
                      name="address"
                      validations={{
                        minLength: 4
                      }}
                      validationErrors={{
                        minLength: "Min character length is 4"
                      }}
                      required
                      variant="outlined"
                    />
                    <lable>Client Name</lable>
                    <TextField
                      style={{ width: "100%" }}
                      className="my-16"
                      type="text"
                      name="postal_code"
                      validations={{
                        minLength: 6
                      }}
                      validationErrors={{
                        minLength: "Min character length is 6"
                      }}
                      required
                      variant="outlined"
                    />
                    <lable>Quantity</lable>
                    <TextField
                      style={{ width: "100%" }}
                      className="my-16"
                      type="email"
                      name="country"
                      validations={{
                        minLength: 2
                      }}
                      validationErrors={{
                        minLength: "Min character length is 2"
                      }}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={6} style={{ padding: "5px" }}>
                    <lable>Price</lable>
                    <TextField
                      style={{ width: "100%" }}
                      className="my-16"
                      type="email"
                      name="town"
                      validations={{
                        minLength: 2
                      }}
                      validationErrors={{
                        minLength: "Min character length is 2"
                      }}
                      required
                      variant="outlined"
                    />
                    <lable>Status</lable>
                    {data == "services" ? (
                      <SelectFormsy
                        className="flex flex-col justify-center"
                        name="related"
                        label=""
                        value="Select All"
                        variant="outlined"
                      >
                        <MenuItem value="0"></MenuItem>
                        <MenuItem value="5">CARRIED OUT</MenuItem>
                        <MenuItem value="10">RECOMMENDED</MenuItem>
                      </SelectFormsy>
                    ) : (
                      <SelectFormsy
                        className="flex flex-col justify-center"
                        name="related"
                        label=""
                        value="Select All"
                        variant="outlined"
                      >
                        <MenuItem value="0"></MenuItem>
                        <MenuItem value="5">SOLD</MenuItem>
                        <MenuItem value="10">RECOMMENDED</MenuItem>
                      </SelectFormsy>
                    )}
                  </Grid>
                </Grid>
              </Formsy>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mx-auto my-16"
                aria-label="LOG IN"
                style={{float:"right",marginRight:"10px"}}
              >
                SAVE
              </Button>
            </div>
          </Fade>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddModal);
