import React, { Component } from "react";
import { withStyles, Tab, Tabs, Icon } from "@material-ui/core";
import { FusePageCarded } from "@fuse";
import Notes from "./components/Notes";
import Discussion from "./components/discussion";
import Products from "./components/products";
import Services from "./components/services";
import ClientInSalon from "./components/DataSheet/clientsInSalon";
// import Diagnosis from "./components/DataSheet/diagnosisNote";
// import SelectButtons from "./components/DataSheet/chooseButton";
import Datasheet from "./components/datasheet";

const styles = theme => ({
  layoutRoot: {}
});

class ImageConsultant extends Component {
  state = {
    tabValue: 0,
    form: {
      name: "Bunny"
    }
  };
  handleChangeTab = (event, tabValue) => {
    this.setState({ tabValue });
  };
  render() {
    const { tabValue, form } = this.state;
    const { classes } = this.props;
    // console.log(tabValue);

    return (
      <FusePageCarded
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h1 className="text-4xl">
              <Icon className="text-4xl">person</Icon>
              <span>Clients</span>
            </h1>
          </div>
        }
        contentToolbar={
          <Tabs
            value={tabValue}
            onChange={this.handleChangeTab}
            indicatorColor="secondary"
            textColor="secondary"
            scrollable="auto"
            scrollButtons="auto"
            classes={{ root: "w-full h-64" }}
            variant="scrollable"
            aria-label="full width tabs example"
          >
            <Tab className="h-64 normal-case" label="SERVICES" />
            <Tab className="h-64 normal-case" label="PRODUCTS" />
            <Tab className="h-64 normal-case" label="NOTES" />
            <Tab className="h-64 normal-case" label="DISCUSSION" />
            <Tab className="h-64 normal-case" label="DATASHEET" />
          </Tabs>
        }
        content={
          form && (
            <div
              style={{
                minHeight: "100%",
                height: "100%"
              }}
            >
              {tabValue === 0 && (
                <div style={{ minHeight: "100%", height: "100%" }}>
                  <Services />
                </div>
              )}
              {tabValue === 1 && (
                <div style={{ minHeight: "100%", height: "100%" }}>
                  <Products />
                </div>
              )}
              {tabValue === 2 && (
                <div style={{ minHeight: "100%", height: "100%" }}>
                  <Notes />
                </div>
              )}
              {tabValue === 3 && (
                <div style={{ minHeight: "100%", height: "100%" }}>
                  <Discussion />
                </div>
              )}
              {tabValue === 4 && (
                <div style={{ minHeight: "100%", height: "100%" }}>
                  <Datasheet />
                </div>
              )}
              {tabValue === 5 && (
                <div style={{ minHeight: "100%", height: "100%" }}></div>
              )}
              {tabValue === 6 && (
                <div style={{ minHeight: "100%", height: "100%" }}></div>
              )}
              {tabValue === 7 && <div></div>}
            </div>
          )
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageConsultant);
