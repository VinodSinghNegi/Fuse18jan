import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import sessionService from '../sessionService';

class UserService extends FuseUtils.EventEmitter {

    constructor() {
        super();
        this.setInterceptors();
    }

    setInterceptors = () => {
        axios.interceptors.request.use(function (config) {
            //attching sessioncode with all request
            const sessionCode = sessionService.getSessionCode();
            config.url = config.url.replace(/{SESSIONCODE}/g, sessionCode);
            return config;
          }, error => {
            // Do something with request error
            return new Promise((resolve, reject) => {
                throw error;
            });
          });
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    sessionService.emit('onAutoLogout', 'Invalid session_code');
                    // this.setSession(null);
                }
                throw err;
            });
        });
    };

    getUserList = () => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/Users/{SESSIONCODE}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to fetch staff list');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };

    getUserInfo = id => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/Users/{SESSIONCODE}/${id}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to fetch user info');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to fetch user info');
                });
        });
    };

    getUserServices = id => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/UserServices/{SESSIONCODE}/${id}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to fetch user services');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to fetch user info');
                });
        });
    };

    createUser = (postData = {}) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/Users/{SESSIONCODE}`, postData)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to create user');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };
    updateUser = (postData = {}) => {
        return new Promise((resolve, reject) => {
            axios.put(`/api/Users/{SESSIONCODE}/${postData.userId}`, postData)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to update user');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };
}

const instance = new UserService();

export default instance;
