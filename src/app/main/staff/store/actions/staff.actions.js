import userService from 'app/services/userService';
import staffService from 'app/services/staffService';
import _ from 'lodash';

export const STAFF_LIST = 'STAFF_LIST';
export const STAFF_SERVICE = 'STAFF_SERVICE';
export const CREATE_STAFF = 'CREATE_STAFF';
export const STAFF_INFO = 'STAFF_INFO';
export const CLEAR_STAFF_INFO = 'CLEAR_STAFF_INFO';

export function getStaffList()
{
    return (dispatch) =>
    userService.getUserList()
            .then((staffList) => {
                    return dispatch({
                        type: STAFF_LIST,
                        staffList
                    });
                }
            )
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}

export function getStaffServices(id)
{
    return (dispatch) =>
    userService.getUserServices(id)
            .then((staffServices) => {
                    return dispatch({
                        type: STAFF_LIST,
                        staffServices: { [id]: staffServices }
                    });
                }
            )
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}
export function createStaff(postData)
{
    return (dispatch) =>
    userService.createUser(postData)
            .then((staffInfo) => {
                clearUserInfo()(dispatch);
                return staffInfo;
            })
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}
export function updateStaffInfo(staffInfo){
    let key, keys = Object.keys(staffInfo);
    let n = keys.length;
    let newobj={}
    while (n--) {
        key = keys[n];
        newobj[_.camelCase(key)] = staffInfo[key];
    }
    return (dispatch) => dispatch({
        type: STAFF_INFO,
        staffInfo: newobj
    });
}
export function clearUserInfo()
{
    return (dispatch) => dispatch({
        type: CLEAR_STAFF_INFO,
    });
}
export function createStaffServices(postData)
{
    return (dispatch) =>
    staffService.assignServiceToStaff(postData)
            .then((userService) => {
                // return dispatch({
                //     type: CLEAR_STAFF_INFO
                // });
            })
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}
export function updateStaff(postData)
{
    return (dispatch) =>
    userService.updateUser(postData)
            .then((staffInfo) => {
                // return dispatch({
                //     type: CLEAR_STAFF_INFO
                // });
            })
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}

export function getStaffInfo(id)
{
    return (dispatch) =>
    userService.getUserInfo(id)
            .then((staffInfo) => {
                return updateStaffInfo(staffInfo)(dispatch);
            })
            .catch(error => {
                console.log("TCL: error", error)
                // return dispatch({
                //     type   : LOGIN_ERROR,
                //     payload: error
                // });
            });
}