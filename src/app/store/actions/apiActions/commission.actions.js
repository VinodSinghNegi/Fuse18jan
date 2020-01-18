import commissionService from 'app/services/commissionService';

export function createCommission(postData)
{
    return (dispatch) =>
    commissionService.createCommission(postData)
            .then((commission) => {
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