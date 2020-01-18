import React, { Component } from "react";
import { Tab, Tabs, Button, withStyles, Paper } from "@material-ui/core";
import Diagnosis from "./diagnosisModal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as staffAction from "app/main/staff/store/actions";

const styles = theme => ({});

class Toolbar extends Component {
  state = {
    switchTab: 0,
    open: false
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  setSwitchTab = val => {
    this.setState({ switchTab: val });
  };
  render() {
    const { switchTab, open } = this.state;
    return (
      <React.Fragment>
        <Tabs
          value={switchTab}
          indicatorColor="secondary"
          textColor="secondary"
          scrollable="true"
          scrollButtons="auto"
          classes={{ root: "w-1/2 h-64" }}
        >
          <Tab
            onClick={e => {
              this.setSwitchTab(0);
              this.props.setSwitchContent(0);
            }}
            className="h-64 normal-case"
            label="LIST STAFF"
          />
          <Tab
            onClick={e => {
              this.setSwitchTab(1);
              this.props.setSwitchContent(1);
            }}
            className="h-64 normal-case"
            label="WORKING HOURS"
          />
        </Tabs>
        {switchTab === 0 ? (
          <div className="w-full text-right">
            <Button
              variant="contained"
              color="primary"
              className={"mr-10"}
              onClick={e => this.handleOpen()}
            >
              Upload
            </Button>
            <Diagnosis open={open} closeButton={this.handleOpen} />
            <Button
              variant="contained"
              color="primary"
              className={"mr-10"}
              onClick={e => {
                this.props.clearUserInfo();
                this.props.history.push("/staffInfo/add");
              }}
            >
              + Add Staff
            </Button>
          </div>
        ) : (
          <div className="w-full text-right">
            <Button
              variant="contained"
              color="primary"
              className={"mr-10"}
              onClick={e => {}}
            >
              +New
            </Button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearUserInfo: staffAction.clearUserInfo
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles, { withTheme: true })(Toolbar)));
