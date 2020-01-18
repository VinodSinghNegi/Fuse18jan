import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, Grid, Button } from "@material-ui/core";
import { FuseChipSelect } from "@fuse";
import * as Actions from 'app/store/actions';
import { withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import * as staffAction from "app/main/staff/store/actions";

class StaffInfo extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    if(id && new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(id)){
      this.props.getStaffInfo(id);
    }
  }

  setStartDate = sDate => {
    this.props.updateStaffInfo({ employmentStart: new Date(sDate).toISOString() });
  };
  setEndDate = eDate => {
    this.props.updateStaffInfo({ employmentEnd: new Date(eDate).toISOString() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { salonId } = this.props;
    if(id && new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(id)){
      //updating staff
      this.props.updateStaff({...this.props.staffInfo, salonId}).then(staffInfo => {
        this.props.showMessage({ message: 'Staff updated successfully' });
      });
    } else {
      //creating new staff
      this.props.createStaff({...this.props.staffInfo, salonId}).then(staffInfo => {
        this.props.updateStaffInfo(staffInfo);
        this.props.showMessage({ message: 'Staff created successfully' });
        this.props.history.push(`/staffInfo/${staffInfo.UserId}`)
      });
    }
  }
  handleChange = (e) => {
    this.props.updateStaffInfo({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { firstName, lastName, phoneNumber, email, note, employmentStart, employmentEnd } = this.props.staffInfo;
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <Grid container>
          <Grid>
            <div xs={6} className="max-w-md pl-20 pt-5">
              <TextField
                className="mt-8 mb-16"
                label="Name"
                autoFocus
                id="firstName"
                name="firstName"
                required
                value={firstName || ''}
                onChange={this.handleChange}
                variant="outlined"
                style={{ width: "48%" }}
              />

              <TextField
                className="mt-8 mb-16 ml-5"
                label="Surname"
                id="lastName"
                name="lastName"
                required
                value={lastName || ''}
                onChange={this.handleChange}
                variant="outlined"
                style={{ width: "49%" }}
              />
              <br />
              <TextField
                className="mt-8 mb-16"
                label="Mobile"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={phoneNumber || ''}
                onChange={this.handleChange}
                variant="outlined"
                style={{ width: "100%" }}
              />

              <TextField
                className="mt-8 mb-16"
                label="Email"
                id="email"
                name="email"
                required
                value={email || ''}
                onChange={this.handleChange}
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid >
            <div xs={6} className=" max-w-md pl-20 pt-1 pr-10">
              NOTES
              <TextField
                className="mb-16"
                id="note"
                name="note"
                onChange={this.handleChange}
                type="text"
                value={note || ''}
                placeholder="Add a note regarding staff member"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="START OF WORKING CONTRACT"
                  name="employmentStart"
                  format="dd/MM/yyyy"
                  value={employmentStart}
                  onChange={this.setStartDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="END OF WORKING CONTRACT"
                  name="employmentEnd"
                  format="dd/MM/yyyy"
                  value={employmentEnd}
                  onChange={this.setEndDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="pl-10 pt-40 pb-10 ">
              <Button type="button" variant="contained">Cancel</Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "20%" }}
                type="submit"
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createStaff: staffAction.createStaff,
      updateStaffInfo: staffAction.updateStaffInfo,
      updateStaff: staffAction.updateStaff,
      getStaffInfo: staffAction.getStaffInfo,
      showMessage: Actions.showMessage,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { staff, auth } = state;
  return { 
    staffInfo: staff.staffInfo,
    salonId: auth.user.SalonId
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffInfo));
