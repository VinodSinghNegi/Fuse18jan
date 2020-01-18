import sessionService from 'app/services/sessionService';
import {setUserData, getLoggenInUserInfo} from './user.actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({username, password})
{
    return (dispatch) =>
    sessionService.signInWithEmailAndPassword(username, password)
            .then((user) => {
                    dispatch(setUserData(user));
                    dispatch(getLoggenInUserInfo(user.UserId));

                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}
