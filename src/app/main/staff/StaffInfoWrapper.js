import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import { FusePageCarded } from "@fuse";
import MemberToolbar from "./components/memberComponents/MemberToolbar";
import StaffInfo from "./components/memberComponents/StaffInfo";
import Services from "./components/memberComponents/Services";
import Commission from "./components/memberComponents/Commission";
import Permission from "./components/memberComponents/Permission";

const styles = theme => ({
  layoutRoot: {}
});

class StaffInfoWrapper extends Component {
  state = {
    switchToolbar: 0,
    switchContent: 0,
    staffData: null,
    showData: false
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
            <MemberToolbar
              setSwitchContent={this.setSwitchContent}
            />
        }
        /////////// Which content should render condition ////////////////
        content={
          switchContent === 0 ? (
            <StaffInfo />
          ) : switchContent === 1 ? (
            <Permission />
          ) : switchContent === 2 ? (
            <Services />
          ) : <Commission />
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(StaffInfoWrapper);
