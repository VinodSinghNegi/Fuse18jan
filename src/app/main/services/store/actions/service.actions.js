import serviceService from 'app/services/serviceService';

export const SERVICE_LIST = 'SERVICE_LIST';
export const SERVICE_CATEGORY_LIST = 'SERVICE_CATEGORY_LIST';

export function getServiceList()
{
    return (dispatch) =>
    serviceService.getServiceList()
            .then((serviceList) => {
                    return dispatch({
                        type: SERVICE_LIST,
                        serviceList
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
export function getServiceCategoryList()
{
    return (dispatch) =>
    serviceService.getServiceCategoryList()
            .then((categoryList) => {
                const categoryListWithIdMapped = {};
                categoryList.forEach(category => {
                    categoryListWithIdMapped[category.ServiceCategoryId] = category;
                });
                    return dispatch({
                        type: SERVICE_CATEGORY_LIST,
                        categoryList: categoryListWithIdMapped
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