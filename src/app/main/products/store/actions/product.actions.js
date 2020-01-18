import productService from 'app/services/productService';

export const PRODUCT_LIST = 'PRODUCT_LIST';
export const CATEGORY_LIST = 'PRODUCT_CATEGORY_LIST';

export function getProductList()
{
    return (dispatch) =>
    productService.getProductList()
            .then((productList) => {
                    return dispatch({
                        type: PRODUCT_LIST,
                        productList
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
export function getProductCategoryList()
{
    return (dispatch) =>
    productService.getProductCategoryList()
            .then((categoryList) => {
                const categoryListWithIdMapped = {};
                categoryList.forEach(category => {
                    categoryListWithIdMapped[category.ProductCategoryId] = category;
                });
                return dispatch({
                    type: CATEGORY_LIST,
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
