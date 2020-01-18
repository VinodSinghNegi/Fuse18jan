import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';
import sessionService from '../sessionService';

class ClientService extends FuseUtils.EventEmitter {

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

    getClientList = () => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/Clients/{SESSIONCODE}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject('Unable to fetch clientList');
                    }
                })
                .catch(error => {
                    // this.logout();
                    reject('Failed to login with SessionCode.');
                });
        });
    };

    // getClientById = clientId => {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`/api/Clients/{SESSIONCODE}/${clientId}?sessionCode={SESSIONCODE}`)
    //             .then(response => {
    //                 if (response.data) {
    //                     resolve(response.data);
    //                 }
    //                 else {
    //                     reject('Unable to fetch client');
    //                 }
    //             })
    //             .catch(error => {
    //                 // this.logout();
    //                 reject('Failed to login with SessionCode.');
    //             });
    //     });
    // };
    // createClient = clientId => {
    //     return new Promise((resolve, reject) => {
    //         axios.post(`/api/Clients/{SESSIONCODE}?sessionCode={SESSIONCODE}`, {

    //         })
    //             .then(response => {
    //                 if (response.data) {
    //                     resolve(response.data);
    //                 }
    //                 else {
    //                     reject('Unable to fetch clientList');
    //                 }
    //             })
    //             .catch(error => {
    //                 // this.logout();
    //                 reject('Failed to login with SessionCode.');
    //             });
    //     });
    // };
}

const instance = new ClientService();

export default instance;
