import React, { Component } from 'react';
import { FuseSplashScreen } from '@fuse';
import { connect } from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
import sessionService from 'app/services/sessionService';
import userService from 'app/services/userService';
import { userInfo } from 'os';

class Auth extends Component {

    state = {
        waitAuthCheck: true
    }

    componentDidMount() {
        return Promise.all([
            this.sessionCheck()
        ]).then(() => {
            this.setState({ waitAuthCheck: false })
        })
    }

    sessionCheck = () => new Promise(resolve => {

        sessionService.on('onAutoLogin', () => {
            this.props.showMessage({ message: 'Logging in with Session Code' });
            /**
             * Sign in and retrieve user data from Api
             */
            sessionService.signInWithSessionCode()
                .then(user => {
                    this.props.setUserData(user);
                    userService.getUserInfo(user['UserId']).then(userInfo => {
                        this.props.setUserData(userInfo);
                    })
                    resolve();
                    this.props.showMessage({ message: 'Logged in with Session Code' });
                })
                .catch(error => {
                    this.props.showMessage({ message: error });
                    resolve();
                })
        });

        sessionService.on('onAutoLogout', (message) => {
            if (message) {
                this.props.showMessage({ message });
            }
            this.props.logout();
            resolve();
        });

        sessionService.on('onNoSessionCode', () => {
            resolve();
        });

        sessionService.init();
        return Promise.resolve();
    })
    render() {
        return this.state.waitAuthCheck ? <FuseSplashScreen /> : <React.Fragment children={this.props.children} />;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logoutUser,
        setUserData: userActions.setUserData,
        showMessage: Actions.showMessage,
        hideMessage: Actions.hideMessage
    },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
