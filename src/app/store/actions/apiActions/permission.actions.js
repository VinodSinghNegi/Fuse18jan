import permissionService from 'app/services/permissionService';

export const PERMISSIONS_LIST = 'PERMISSIONS_LIST';

export function getPermissionList()
{
    return (dispatch) =>
    permissionService.getPermissionList()
            .then((permissionList) => {
                    return dispatch({
                        type: PERMISSIONS_LIST,
                        permissionList
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
export function createUserPermission(postData)
{
    return (dispatch) =>
    permissionService.createUserPermission(postData)
            .then((userPermission) => {
                    // return dispatch({
                    //     type: "STAFF_INFO",
                    //     staffInfo: userPermission
                    // });
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