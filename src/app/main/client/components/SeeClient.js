
import React, { Component } from 'react';
import { withStyles, Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { FuseAnimate, FusePageCarded, FuseChipSelect } from '@fuse';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
// import { Icon } from '@material-ui/core';
import ClientInfo from "./Tabs/client_Info"
import Privacy from "./Tabs/Privacy"
import BankData from "./Tabs/bankData"
import Address from "./Tabs/address"
import Datasheet from "./Tabs/DataSheet/DataSheetTabs"
import DataSheetTabs from './Tabs/DataSheet/DataSheetTabs';
import OtherInfo from "./Tabs/otherInfo"
import Interest from "./Tabs/interestSocial"
import Relative from "./Tabs/Relatives"

const styles = theme => ({
    layoutRoot: {}
});

class ClientView extends Component {
    state = {
        tabValue: 0,
        form: {
            name: "Bunny"
        }
    }
    handleChangeTab = (event, tabValue) => {
        this.setState({ tabValue });
    };
    render() {
        const { tabValue, form } = this.state
        const { classes } = this.props
        console.log(tabValue);


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
                contentToolbar={
                    <Tabs
                        value={tabValue}
                        onChange={this.handleChangeTab}
                        indicatorColor="secondary"
                        textColor="secondary"
                        scrollable
                        scrollButtons="auto"
                        classes={{ root: "w-full h-64" }}
                        variant="scrollable"
                        aria-label="full width tabs example"
                    // style={{padding:'0px'}}
                    >
                        <Tab className="h-64 normal-case" label="CLIENT INFO" />
                        <Tab className="h-64 normal-case" label="DATA SHEET" />
                        <Tab className="h-64 normal-case" label="ADDRESS" />
                        <Tab className="h-64 normal-case" label="OTHER iNFO" />
                        <Tab className="h-64 normal-case" label="BANK DATA" />
                        <Tab className="h-64 normal-case" label="PROFESSIONAL INFO" />
                        <Tab className="h-64 normal-case" label="INTERESTS AND SOCIAL" />
                        <Tab className="h-64 normal-case" label="RELATIVES" />
                        <Tab className="h-64 normal-case" label="PRIVACY" />
                    </Tabs>
                }

                content={
                    form && (
                        <div className="p-16 sm:p-24 max-w-2xl">
                            {tabValue === 0 && (
                                <div>
                                    <ClientInfo />
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <DataSheetTabs />
                                </div>
                            )}
                            {tabValue === 2 && (
                                <div>
                                    <Address />
                                </div>
                            )}
                            {tabValue === 3 && (
                                <div>
                                    <OtherInfo />
                                </div>
                            )}
                            {tabValue === 4 && (
                                <div>
                                    <BankData />
                                </div>
                            )}
                            {tabValue === 6 && (
                                <div>
                                    <Interest />
                                </div>
                            )}
                            {tabValue === 7 && (
                                <div>
                                    <Relative />
                                </div>
                            )}

                            {tabValue === 8 && (
                                <div>
                                    <Privacy />
                                </div>
                            )}
                        </div>)

                }

            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(ClientView);
