import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import { FusePageCarded } from "@fuse";
import ListStaff from "./components/staffComponents/ListStaff";
import Workinghours from "./components/staffComponents/WorkingHours";
import StaffToolbar from "./components/staffComponents/StaffToolbar";

const styles = theme => ({
  layoutRoot: {}
});

class Staff extends Component {
  state = {
    switchContent: 0
  };

  ///////////// method to change content ////////////
  setSwitchContent = contentValue => {
    this.setState({ switchContent: contentValue });
  };
  ////////////////// render ///////////////////////
  render() {
    const { switchContent } = this.state;

    const { classes } = this.props;
    return (
      <FusePageCarded
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h1 className="text-4xl">
              <Icon className="text-4xl">person</Icon>
              <span>Staffs</span>
            </h1>
          </div>
        }
        /////////// Which toolbar should render condition ////////////////
        contentToolbar={
          <StaffToolbar setSwitchContent={this.setSwitchContent} />
        }
        /////////// Which content should render condition ////////////////
        content={switchContent === 0 ? <ListStaff /> : <Workinghours />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Staff);
