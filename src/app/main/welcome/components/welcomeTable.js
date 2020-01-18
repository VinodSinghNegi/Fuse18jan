import React, { forwardRef, Fragment } from "react";
// import AddBox from "material-ui/icon/AddBox"
import MaterialTable from "material-table";
import {withRouter} from "react-router-dom"
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
var moment = require("moment");
var CurrentDate = moment().format("ddd MMM DD YYYY hh:mm");

 function MaterialTableDemo({history}) {
  const toggle= async (id, data)=> {
    console.log(id,data);
    const s = state;
    const arr = s.data.filter(d => {
      return d.tableData !== id;
    });
    data.inSalon = !data.inSalon;
    arr.splice(id.id, 0, data);
    s.data = arr;
    await setState({...s});
  
  }
  const [state, setState] = React.useState({
    columns: [
      { title: "Arrival", field: "arrivalTime", type: "time" },
      { title: "Client", field: "name" },
      {
        title: "In salon",
        field: "inSalon",
        render: rowData =>
          rowData.inSalon ? (
            <button
              onClick={e => toggle(rowData.tableData, rowData)}
              style={{
                backgroundColor: "green",
                border: "none",
                padding: "15px 32px",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              {"Yes"}
            </button>
          ) : (
            <button
              onClick={e => toggle(rowData.tableData, rowData)}
              style={{
                backgroundColor: "red",
                border: "none",
                padding: "15px 32px",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              {"No"}
            </button>
          )
      },

      {
        title: "Telephone#1",
        field: "Telephone",
        type: "numeric"
      },
      {
        title: "Telephone#2",
        field: "Telephone",
        type: "numeric"
      }

    ],
    data: [
      { arrivalTime: 21, name: "Angelina Jolie", inSalon: true },
      { arrivalTime: 15, name: "John ", inSalon: false }
    ],

    title: `Today,${CurrentDate}`,
    actions: [
      {
        icon: "shopping_cart",
        tooltip: "shopping_cart",
        onClick: (event, rowData) => history.push("./checkout")
      },
      {
        icon: "remove_red_eye",
        tooltip: "See User",
        onClick: (event, rowData) => alert("See User " + rowData.name)
      },

      {
        icon: "calendar_today",
        tooltip: "calendar_today",
        onClick: (event, rowData) => alert("calendar_today " + rowData.name)
      },
      {
        icon: "photo_camera",
        tooltip: "Camera",
        onClick: (event, rowData) => alert("Camera " + rowData.name)
      },

      {
        icon: "message",
        tooltip: "Send Message",
        onClick: (event, rowData) => alert("message " + rowData.name)
      }
    ]
  });
  return (
    
    <Fragment>
      <MaterialTable
        title={state.title}
        columns={state.columns}
        data={state.data}
        actions={state.actions}
        
      />
      {/* <MaterialTable actions={state.actions}/> */}
    </Fragment>
  );
}
export default withRouter(MaterialTableDemo)