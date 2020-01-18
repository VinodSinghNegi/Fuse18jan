import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Divider, Button } from "@material-ui/core";
import { FuseChipSelect } from "@fuse/index";

import * as Actions from 'app/store/actions';
import * as apiActions from "app/store/actions/apiActions";
import * as staffAction from "app/main/staff/store/actions";

class Permission extends Component {

  componentDidMount() {
    this.props.getPermissionList();
  }

  handleChange = e => {
    const permissions = e.map(permission => ({"permissionId": permission.value, "permission": permission.label}))
    this.props.updateStaffInfo({
        permissions
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    if (
      id &&
      new RegExp(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      ).test(id)
    ) {
        this.props.staffInfo.permissions.forEach(permission => {
            this.props.createUserPermission({userId: id, permissionId: permission.permissionId})
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <form
          style={{ width: "50%", padding: "10px" }}
          onSubmit={this.handleSubmit}
        >
          <div className="ml-20 pt-5">Assign a permission to this staff</div>
          <Divider />
          <FuseChipSelect
            onChange={this.handleChange}
            value={this.props.staffInfo.permissions.map(permission => {
                return {
                  value: permission.permissionId,
                  label: permission.permission
                };
            })}
            placeholder="Select Permissions"
            isMulti
            textFieldProps={{
              variant: "outlined"
            }}
            options={this.props.permissionList.map(permission => {
                return {
                  value: permission.PermissionId,
                  label: permission.Permission
                };
            })}
            variant="fixed"
          />
          <div className="pl-10 pt-40 pb-10 ">
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "20%" }}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPermissionList: apiActions.getPermissionList,
      createUserPermission: apiActions.createUserPermission,
      updateStaffInfo: staffAction.updateStaffInfo,
      showMessage: Actions.showMessage,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { permissions, staff } = state;
  return {
    permissionList: permissions.permissionList,
    staffInfo: staff.staffInfo,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Permission));
