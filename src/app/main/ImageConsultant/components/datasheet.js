import React, { Component } from "react";

import { Tabs, Tab, withStyles } from "@material-ui/core";
import Formsy from "formsy-react";
import History from "./DataSheet/history";
import Gallery from "./DataSheet/gallery";
import ClientInSalon from "./DataSheet/clientsInSalon";
import DiagnosisNotes from "./DataSheet/diagnosisNote";
import ChooseButton from "./DataSheet/chooseButton";

const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

class Datasheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightcontent: 0
    };
  }

  setrightcontent = rightcontent => {
    debugger;
    this.setState({ rightcontent: rightcontent });
  };

  render() {
    const { classes } = this.props;
    const { rightcontent } = this.state;

    return (
      <React.Fragment>
        <div className={classes.paper}>
          <Tabs
            value={rightcontent}
            indicatorColor="secondary"
            textColor="secondary"
            scrollable
            scrollButtons="auto"
            classes={{ root: "w-full h-64" }}
            variant="scrollable"
          >
            <Tab
              onClick={e => this.setrightcontent(0)}
              className="h-64 normal-case"
              label="HISTORY"
            />
            <Tab
              onClick={e => this.setrightcontent(1)}
              className="h-64 normal-case"
              label="GALLERY"
            />
            <Tab
              onClick={e => this.setrightcontent(2)}
              className="h-64 normal-case"
              label="IN SALON"
            />
            <Tab
              onClick={e => this.setrightcontent(3)}
              className="h-64 normal-case"
              label="NOTES"
            />
            <Tab
              onClick={e => this.setrightcontent(4)}
              className="h-64 normal-case"
              label="CHOOSE PHOTO"
            />
          </Tabs>
          <Formsy className="justify-center">
            {rightcontent == 0 && <History />}
            {rightcontent == 1 && <Gallery />}
            {rightcontent == 2 && <ClientInSalon />}
            {rightcontent == 3 && <DiagnosisNotes />}
            {rightcontent == 4 && <ChooseButton />}
          </Formsy>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Datasheet);
