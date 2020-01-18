import React, { Component } from "react";
import { Tab, Tabs,Button } from "@material-ui/core";

class Toolbar extends Component {
  state = {
    switchTab: 0
  };
  setSwitchTab = val => {
    this.setState({ switchTab: val });
  };
  render() {
    const { switchTab } = this.state;

    return (
      <React.Fragment>
        <Tabs
          value={switchTab}
          indicatorColor="secondary"
          textColor="secondary"
          scrollable="true"
          scrollButtons="auto"
          classes={{ root: "w-full h-64" }}
        >
          <Tab
            onClick={e => {
              this.setSwitchTab(0);
              this.props.setSwitchContent(0);
            }}
            className="h-64 normal-case"
            label="STAFF INFO"
          />
          <Tab
            onClick={e => {
              this.setSwitchTab(1);
              this.props.setSwitchContent(1);
            }}
            className="h-64 normal-case"
            label="PERMISSIONS"
          />
          <Tab
            onClick={e => {
              this.setSwitchTab(2);
              this.props.setSwitchContent(2);
            }}
            className="h-64 normal-case"
            label="SERVICES"
          />
          <Tab
            onClick={e => {
              this.setSwitchTab(3);
              this.props.setSwitchContent(3);
            }}
            className="h-64 normal-case"
            label="COMMISSION"
          />
        </Tabs>
      </React.Fragment>
    );
  }
}

export default Toolbar;
