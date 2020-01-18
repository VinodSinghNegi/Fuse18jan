import React, { Component } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as staffAction from "app/main/staff/store/actions";

class StaffList extends Component {
  state = {
    columns: [
      { title: "Name", render: rowData => rowData.FirstName + ' ' + rowData.LastName },
      { title: "Mobile", field: "PhoneNumber" },
      { title: "Email", field: "Email", type: "string" },
      {
        title: "Permission",
        field: "permission"
      }
    ],
    title: "",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit",
        onClick: (e, rowData) => {
          const data = { ...rowData };
          delete data.tableData;
          if(data.UserId){
            this.props.updateStaffInfo(data);
            this.props.history.push(`/staffInfo/${data.UserId}`)
          }
        }
      }
    ]
  };
  componentDidMount() {
    this.props.getStaffList();
  }
  render() {
    const {staffList} = this.props;
    return (
      <MaterialTable
        title={this.state.title}
        columns={this.state.columns}
        data={staffList}
        actions={this.state.actions}
      />
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getStaffList: staffAction.getStaffList,
      updateStaffInfo: staffAction.updateStaffInfo
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
)(withRouter(StaffList));
