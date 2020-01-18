import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

class SessionService extends FuseUtils.EventEmitter {

    init() {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid session_code');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {
        let sessionCode = this.getSessionCode();
        if (!sessionCode) {
            this.emit('onNoSessionCode');
            return;
        }
        this.emit('onAutoLogin', true);
        this.setSession(sessionCode);
        // if (this.isSessionCodeValid(sessionCode)) {
        // }
        // else {
        //     this.setSession(null);
        //     this.emit('onAutoLogout', 'session_code expired');
        // }
    };

    // createUser = (data) => {
    //     return new Promise((resolve, reject) => {
    //         axios.post('/api/auth/register', data)
    //             .then(response => {
    //                 if (response.data.user) {
    //                     this.setSession(response.data.access_token);
    //                     resolve(response.data.user);
    //                 }
    //                 else {
    //                     reject(response.data.error);
    //                 }
    //             });
    //     });
    // };

    signInWithEmailAndPassword = (username, password) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/Sessions/Login?username=${username}&password=${password}`).then(response => {
                if (response.data) {
                    this.setSession(response.data.SessionCode);
                    resolve(response.data);
                }
                else {
                    reject(response.data.error);
                }
            });
        });
    };

    signInWithSessionCode = () => {
        return new Promise((resolve, reject) => {
            const sessionCode = this.getSessionCode();
            axios.post(`/api/Sessions/Check/?sessionCode=${sessionCode}`)
                .then(response => {
                    if (response.data) {
                        this.setSession(response.data.SessionCode);
                        resolve(response.data);
                    }
                    else {
                        this.logout();
                        reject('Failed to login with SessionCode.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = sessionCode => {
        if (sessionCode) {
            localStorage.setItem('session_code', sessionCode);
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionCode;
        }
        else {
            localStorage.removeItem('session_code');
            // delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        return new Promise((resolve, reject) => {
            const sessionCode = this.getSessionCode();
            axios.post(`/api/Sessions/Logout/?sessionCode=${sessionCode}`)
                .then(response => {
                    if (response.data) {
                        this.setSession(null);
                        resolve();
                    }
                    else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject('Failed to logout with SessionCode.');
                });
        });
    };

    isSessionCodeValid = sessionCode => {
        if (!sessionCode) {
            return false;
        }
        const decoded = jwtDecode(sessionCode);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn('session_code expired');
            return false;
        }
        else {
            return true;
        }
    };

    getSessionCode = () => {
        return window.localStorage.getItem('session_code');
    };
}

const instance = new SessionService();

export default instance;
