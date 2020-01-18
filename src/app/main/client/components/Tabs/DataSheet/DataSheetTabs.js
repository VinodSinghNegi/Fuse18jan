import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

import {
    Button,
    MenuItem,
    Tabs,
    Tab,
    TextField,
    withStyles
} from "@material-ui/core";
import { TextFieldFormsy, CheckboxFormsy } from "@fuse";
import Formsy from "formsy-react";
import ClientScalpDiagnosis from "./ClientScalpDiagnosis";
import ClientRequests from "./ClientRequests";
import ClientHairDiagnosis from "./ClientHairDiagnosis";
import ClientTreatmentHistory from "./ClientTreatmentHistory";

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


class SeeClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightcontent: 0,
        };
    }

    setrightcontent = rightcontent => {
        debugger;
        this.setState({ rightcontent: rightcontent });
    };

    render() {
        const { classes } = this.props;
        const { rightcontent} = this.state;

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
                            <Tab onClick={e => this.setrightcontent(0)} className="h-64 normal-case" label="TREATMENT HISTORY" />
                            <Tab onClick={e => this.setrightcontent(1)} className="h-64 normal-case" label="HAIR DIAGNOSIS" />
                            <Tab onClick={e => this.setrightcontent(2)} className="h-64 normal-case" label="SCALP DIAGNOSIS" />
                            <Tab onClick={e => this.setrightcontent(3)} className="h-64 normal-case" label="CLIENT REQUESTS" />
                        </Tabs>
                        <Formsy className="justify-center">
                            {rightcontent == 0 && (
                               <ClientTreatmentHistory/>
                            )}
                            {rightcontent == 1 && (
                               <ClientHairDiagnosis/>
                            )}
                            {rightcontent == 2 && (
                                <ClientScalpDiagnosis />
                            )}
                            {rightcontent == 3 && (
                                <ClientRequests />
                            )}
                        </Formsy>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SeeClient);