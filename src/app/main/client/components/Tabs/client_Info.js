import React from "react";

import { TextField, Grid } from "@material-ui/core";
import { FuseChipSelect } from "@fuse";

export default function ClientInfo(props) {
  return (
    <div>
      <Grid container>
        <Grid xs={6}>
          <div className="ml-20 pt-5">

              Name
              <br/>
            <TextField
              className="mt-8 mb-16 mr-8 "
              
              autoFocus
              id="name"
              name="name"
              required
              value={props.formdata && props.formdata.name}
              // onChange={this.handleChange}
              variant="outlined"
              style={{ width: "45%" }}
            />

            
            <br />
            Telephone
            <TextField
              className="mt-8 mb-16"
              
              id="Telephone"
              name="Telephone"
              required
              value={props.formdata && props.formdata.Telephone}
              // onChange={this.handleChange}
              variant="outlined"
              style={{ width: "90%" }}
            />
            <br/>
            Email
            <br/>

            <TextField
              className="mt-8 mb-16"
              
              id="email"
              name="email"
              required
             value={props.formdata && props.formdata.email}
              variant="outlined"
              style={{ width: "90%" }}
            />
          </div>
        </Grid>
        
        <Grid xs={6}>
          <div className=" max-w-md pt-1">
           <br/>
            NOTES
            <TextField
              className="mb-16"
              id="note"
              name="note"
              // onChange={this.handleChange}
              // label="NOTES"
              type="text"
              value={props.formdata && props.formdata.note}
              placeholder="Add a note regarding staff member"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
            />
          </div>
         
        </Grid>
      </Grid>
    </div>
  );
}
