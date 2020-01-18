import React, { Component } from "react";
import MaterialTable from "material-table";

class ApiKeyComponent extends Component {
  state = {
    columns: [
      { title: "Salon Id", field: "salonId" },
      { title: "Name", field: "name" },
      { title: "Address", field: "address" },
      { title: "API Key", field: "apikey" }
    ],
    title: "",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit",
        onClick: (e, rowData) => {}
      }
    ]
  };

  render() {
    return (
      <MaterialTable
        title={this.state.title}
        columns={this.state.columns}
        data=""
        actions={this.state.actions}
      />
    );
  }
}

export default ApiKeyComponent;