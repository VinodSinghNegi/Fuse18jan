import agendaService from 'app/services/agendaService';

export const AGENDA_LIST = 'AGENDA_LIST';

export function getAgendaList()
{
    return (dispatch) =>
    agendaService.getAgendaList()
            .then((agendaList) => {
                    return dispatch({
                        type: AGENDA_LIST,
                        agendaList
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
