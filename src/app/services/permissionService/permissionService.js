import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import sessionService from '../sessionService';

class PermissionService extends FuseUtils.EventEmitter {

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

    getPermissionList = () => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/Permissions/{SESSIONCODE}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to fetch permissions');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };
    createUserPermission = postData => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/UserPermissions/{SESSIONCODE}`, postData)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to create user permission');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };
}

const instance = new PermissionService();

export default instance;
