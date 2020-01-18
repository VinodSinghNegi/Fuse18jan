import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductSetting from './ProductSetting'
import { withStyles } from "@material-ui/core";
import * as productAction from "app/main/products/store/actions";

const styles = theme => ({

});

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSetting: false,
            modalData: {}
        };
    }

    componentDidMount() {
        this.props.getProductList();
        this.props.getProductCategoryList();
    }

    setModalData = (modalData) => {
        console.log("TCL: setModalData -> modalData", modalData)
        this.setState({ modalData, showSetting: true });
    }

    handleModalClose = () => {
        this.setState({ showSetting: false })
    }

    renderCategoryName = (rowData) => {
        if(Object.keys(this.props.categoryList).length && this.props.categoryList[rowData.ProductCategoryId]){
            return rowData.categoryName = this.props.categoryList[rowData.ProductCategoryId].ProductCategory;;
        }
        return null;
    }

    render() {
        const { classes, productList, categoryList} = this.props;
        const { modalData, showSetting } = this.state;
        return (
            <React.Fragment>
                <MaterialTable
                    title={''}
                    columns={[
                        { title: 'Product Name', field: 'Product' },
                        { title: 'Category', field: 'categoryName', render: this.renderCategoryName },
                        { title: 'Bar code', field: 'barcode' },
                        {
                            title: 'Retail price',
                            field: 'Price',
                        },
                        {
                            title: 'Stock amount',
                            field: 'Stock',
                        },
                        {
                            title: 'Last modified',
                            field: 'lastModified',
                        },
                    ]}
                    data={productList}
                    actions={
                        [
                            {
                                icon: 'more_vert',
                                tooltip: 'Product Setting',
                                onClick: (event, rowData) => this.setModalData(rowData)

                            }]}
                />
                {
                    showSetting && <ProductSetting
                        showSetting={showSetting}
                        handleModalClose={this.handleModalClose}
                        data={modalData}
                    />
                }
            </React.Fragment>
        );
    }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        getProductList: productAction.getProductList,
        getProductCategoryList: productAction.getProductCategoryList
    },
    dispatch
  );
}
function mapStateToProps(state) {
    const { products } = state;
    return { 
      productList: products.productList,
      categoryList: products.categoryList,
    };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ProductListing));