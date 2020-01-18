import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
// import ServiceModal from "./components/service";
// import ServiceList from "./components/service_front";
import ClientList from "./components/ClientList"
import { Icon } from '@material-ui/core';

const styles = theme => ({
  layoutRoot: {}
});

class Client extends Component {
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
              <Icon className='text-4xl'>person</Icon>
              <span>Clients</span>
            </h1>
          </div>
        }
        content={ <ClientList />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Client);
