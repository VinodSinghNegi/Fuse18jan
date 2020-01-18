import React, { forwardRef,Fragment } from "react";
import MaterialTable from "material-table";

export default function Privacy(){
    const [state, setState] = React.useState({
        columns: [
          { title: "Privacy", field: "privacy"},
          { title: "Consensus", field: "consensus" },
          { title: "Date Consensus", field: "date_consensus", type: "datetime" },
         
        
        ],
        data: [
        //   { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
        {privacy:"Data collection regarding my contact info",consensus:"Angelina Jolie",date_consensus:"17/12/2016"},
        {privacy:"Data collection regarding my contact info",consensus:"Angelina Jolie",date_consensus:"17/12/2016"},
        {privacy:"Data collection regarding my contact info",consensus:"Angelina Jolie",date_consensus:"17/12/2016"}


        ],
        title: "Demo Title",
       
      });
    
      return (
          <Fragment>
        <MaterialTable
          title={state.title}
          columns={state.columns}
          data={state.data}
          />
        </Fragment>
          
          
      )

}
