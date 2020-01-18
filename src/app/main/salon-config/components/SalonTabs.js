import React, { Component } from "react";

import {
    Tabs,
    Tab,
    withStyles
} from "@material-ui/core";
import Formsy from "formsy-react";
import OpeningTimes from "./tabs/OpeningTimes";
import DaysClosed from "./tabs/DaysClosed";
import Privacy from "./tabs/Privacy";
import BookingWidget from "./tabs/BookingWidget";

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
        height: "100%",
    },
    root: {
        flexGrow: 1
    }
});


class SalonTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightcontent: 0,
        };
    }

    content = rightcontent => {
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
                    >
                        <Tab onClick={e => this.content(0)} className="h-64 normal-case" label="OPENING TIMES" />
                        <Tab onClick={e => this.content(1)} className="h-64 normal-case" label="DAYS CLOSED" />
                        <Tab onClick={e => this.content(2)} className="h-64 normal-case" label="PRIVACY" />
                        <Tab onClick={e => this.content(3)} className="h-64 normal-case" label="BOOKING WIDGET" />
                    </Tabs>
                    <Formsy className="justify-center">
                        {rightcontent === 0 && (
                            <OpeningTimes />
                        )}
                        {rightcontent === 1 && (
                            <DaysClosed />
                          
                        )}
                        {rightcontent === 2 && (
                            <Privacy />
                        )}
                        {rightcontent === 3 && (
                            <BookingWidget />
                        )}
                    </Formsy>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SalonTabs);