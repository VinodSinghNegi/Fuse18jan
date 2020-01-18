import React, { Fragment, useEffect } from "react";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as clientAction from "app/main/client/store/actions";

function ClientList({ history, ...props }) {
  useEffect(() => {
    props.getClientList();
  }, []);
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "Name" },
      { title: "Telephone", field: "PhoneNumber", type: "numeric" },
      { title: "Email", field: "Email" },
      {
        title: "Address",
        field: "Address"
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      }
    ],
    title: "Demo Title",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit Client",
        onClick: (event, rowData) =>
          history.push(`/clientInfo/${rowData.clientId}`)
      },
      {
        icon: "remove_red_eye",
        tooltip: "See Client",
        onClick: (event, rowData) =>
          history.push(`/clientInfo/${rowData.clientId}`)
      }
    ]
  });

  return (
    <Fragment>
      <div className={'text-right'}>
      <Button
        onClick={() => {
          history.push("/add-clientInfo");
        }}
        type="submit"
        variant="contained"
        color="primary"
        className="mx-auto my-16 mr-12"
        aria-label="LOG IN"
        // disabled={!isFormValid}
      >
        +NEW
      </Button>
      </div>
      <MaterialTable
        title=""
        columns={state.columns}
        data={props.clientList}
        actions={state.actions}
      />
    </Fragment>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getClientList: clientAction.getClientList
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { client } = state;
  return { clientList: client.clientList };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ClientList));
