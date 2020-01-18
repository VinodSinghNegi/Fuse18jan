import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
import ServiceModal from "./components/service";
import ServiceList from "./components/serviceList";
import { Icon } from '@material-ui/core';

const styles = theme => ({
  layoutRoot: {}
});

class Service extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FusePageCarded
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h1 className="text-4xl">
              <Icon className='text-4xl'>airline_seat_recline_normal</Icon>
              <span>Services</span>
            </h1>
          </div>
        }
        content={ <ServiceList />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Service);
