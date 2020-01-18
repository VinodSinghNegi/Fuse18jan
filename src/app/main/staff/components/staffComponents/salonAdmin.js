import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class SalonAdmin extends Component {
  handleChange = e => {};
  render() {
    return (
      <form>
        <div className="max-w-md pl-20 pt-5">
          <TextField
            className="mt-8 mb-16"
            label="First Name"
            autoFocus
            id="firstName"
            name="firstName"
            required
            value=""
            onChange={this.handleChange}
            variant="outlined"
            style={{ width: "50%" }}
          />
          <br />
          <TextField
            className="mt-8 mb-16"
            label="Last Name"
            id="lastName"
            name="lastName"
            required
            value=""
            onChange={this.handleChange}
            variant="outlined"
            style={{ width: "50%" }}
          />
          <br />

          <TextField
            className="mt-8 mb-16"
            label="Username (Email Address)"
            id="username"
            name="username"
            required
            value=""
            onChange={this.handleChange}
            variant="outlined"
            style={{ width: "50%" }}
          />
          <br />

          <TextField
            className="mt-8 mb-16"
            label="Password"
            id="password"
            name="password"
            required
            value=""
            onChange={this.handleChange}
            variant="outlined"
            style={{ width: "50%" }}
          />
        </div>

        <div className="pl-10 pt-40 pb-10 ">
          <Button type="button" variant="contained">
            Cancel
          </Button>
          <Button className="ml-5" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    );
  }
}

export default SalonAdmin;
