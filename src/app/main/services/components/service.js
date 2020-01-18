import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CloseIcon from "@material-ui/icons/Close";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "@lodash";
import * as staffAction from "app/main/staff/store/actions";
import { FuseChipSelect } from "@fuse/index";
import {
  Button,
  MenuItem,
  Radio,
  Tabs,
  Tooltip,
  Tab,
  TextField,
  withStyles,
  Avatar
} from "@material-ui/core";
import { TextFieldFormsy, CheckboxFormsy } from "@fuse";
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

const defaultProps = {
  options: [
    { value: "0min" },
    { value: "5min" },
    { value: "10min" },
    { value: "15min" }
  ],
  getOptionLabel: option => option.value
};

class ServiceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightcontent: 0,
      service: {
        category: "category",
        service_name: props.data.service,
        duration: props.data.duration,
        price: props.data.price,
        description: "i am an extended description"
      },
      staffList: [
        { name: "Alice", image: "assets/images/avatars/alice.jpg" },
        { name: "Jane", image: "assets/images/avatars/jane.jpg" },
        { name: "Mai", image: "assets/images/avatars/Mai.jpg" },
        { name: "Abbott", image: "assets/images/avatars/Abbott.jpg" },
        { name: "Helen", image: "assets/images/avatars/Helen.jpg" },
        { name: "Lily", image: "assets/images/avatars/Lily.jpg" }
      ],
      selectedvalue: []
    };
  }

  componentDidMount() {
    this.props.getStaffList();
  }

  setrightcontent = rightcontent => {
    this.setState({ rightcontent: rightcontent });
  };
  handle = event => {
    if (event) {
      this.setState({
        selectedvalue: event
      });
    }
  };
  render() {
    const {
      classes,
      data,
      showService,
      handleModalClose,
      staffList
    } = this.props;
    // console.log("TCL: ServiceModal -> render -> data", data);
    const { service, rightcontent } = this.state;

    return (
      <React.Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={showService}
          onClose={handleModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={showService}>
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
                  Service-
                  {(rightcontent === 0 && "Settings") ||
                    (rightcontent === 1 && "Staff")}
                </Grid>
                <Grid xs={6} style={{ padding: "5px" }}>
                  <CloseIcon
                    onClick={handleModalClose}
                    style={{ float: "right", zIndex: "100" }}
                  />
                </Grid>
              </div>

              <Grid container style={{ padding: "5px" }}>
                <Grid xs={6} style={{ padding: "5px" }}>
                  <Formsy className="flex flex-col justify-center">
                    <TextFieldFormsy
                      className="my-16"
                      type="text"
                      value={data.categoryName}
                      name="CATEGORY"
                      label="CATEGORY"
                      validations={{
                        minLength: 2
                      }}
                      required
                      variant="filled"
                    />
                    <TextFieldFormsy
                      className="my-16"
                      type="text"
                      name="SERVICE_NAME"
                      label="SERVICE NAME"
                      value={data.Service}
                      validations={{
                        minLength: 2
                      }}
                      validationErrors={{
                        minLength: "Min character length is 2"
                      }}
                      required
                      variant="filled"
                    />
                    <div style={{ width: "100%" }}>
                      <TextFieldFormsy
                        className="my-16 pr-5"
                        type="numeric"
                        name="DURATION"
                        label="DURATION"
                        value={data.Lenght}
                        required
                        variant="filled"
                      />
                      <TextFieldFormsy
                        className="my-16"
                        type="numeric"
                        name="PRICE"
                        label="PRICE"
                        value={data.Price}
                        required
                        variant="filled"
                      />
                    </div>
                    {rightcontent == 1 && (
                      <TextField
                        className="mb-16"
                        id="note"
                        name="note"
                        type="text"
                        label="Extended Description"
                        value={service.description}
                        placeholder="Add a note regarding staff member"
                        multiline
                        rows={3}
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Formsy>
                </Grid>
                <Grid xs={6} style={{ padding: "5px" }}>
                  <Tabs
                    value={rightcontent}
                    indicatorColor="secondary"
                    textColor="secondary"
                    scrollable
                    scrollButtons="auto"
                    classes={{ root: "w-full h-64" }}
                  >
                    <Tab
                      onClick={e => this.setrightcontent(0)}
                      className="h-64 normal-case"
                      label="SETTINGS"
                    />
                    <Tab
                      onClick={e => this.setrightcontent(1)}
                      className="h-64 normal-case"
                      label="STAFF"
                    />
                  </Tabs>
                  <br />

                  <Formsy className="flex flex-col justify-center">
                    {rightcontent == 0 && (
                      <>
                        <Autocomplete
                          {...defaultProps}
                          id="disable-clearable"
                          variant="outlined"
                          disableClearable
                          renderInput={params => (
                            <TextField
                              {...params}
                              label="NPS"
                              margin="normal"
                              fullWidth
                              variant="outlined"
                            />
                          )}
                        />
                        <p>
                          Add a break after this service to allow staff to clean
                          the instruments, floor, etc.
                        </p>
                        <CheckboxFormsy
                          name="settings"
                          value={true}
                          label="Enable commissions"
                        />
                      </>
                    )}
                    {rightcontent == 1 && (
                      <>
                        <p>
                          Select the staff members who can perform this service
                        </p>

                        <FuseChipSelect
                          className={
                            this.state.selectedvalue.length > 0 && "sm:ml-8"
                          }
                          onChange={this.handle}
                          value={this.state.selectedvalue.map(staff => {
                            return {
                              value: staff.name,
                              name: staff.name,
                              image: staff.image,
                              label: (
                                <div
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center"
                                  }}
                                >
                                  <Avatar
                                    className="-ml-12 w-32 h-32"
                                    src={staff.image}
                                  />
                                  &nbsp; &nbsp;
                                  <span>{staff.name}</span>
                                </div>
                              )
                            };
                          })}
                          placeholder="Select multiple Members"
                          isMulti
                          textFieldProps={{
                            variant: "outlined"
                          }}
                          options={this.state.staffList.map(staff => {
                            return {
                              value: staff.name,
                              name: staff.name,
                              image: staff.image,
                              label: (
                                <span className="flex items-center">
                                  <Avatar
                                    className="w-32 h-32 mr-8"
                                    src={staff.image}
                                  />
                                  {staff.name}
                                </span>
                              )
                            };
                          })}
                          variant="fixed"
                        />
                      </>
                    )}
                  </Formsy>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mx-auto my-16"
                    aria-label="LOG IN"
                  >
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getStaffList: staffAction.getStaffList
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { staff } = state;
  return { staffList: staff.staffList };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ServiceModal));
