import clientService from 'app/services/clientService';

export const CLIENT_LIST = 'CLIENT_LIST';

export function getClientList()
{
    return (dispatch) =>
    clientService.getClientList()
            .then((clientList) => {
                    return dispatch({
                        type: CLIENT_LIST,
                        clientList
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
