import React, { forwardRef, Component } from "react";
import MaterialTable from "material-table";
import ServiceModal from "./service";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core";
import * as serviceAction from "app/main/services/store/actions";

const styles = theme => ({

});

class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showService: false,
            columns: [
                { title: "Services", field: "Service" },
                { title: "Duration", field: "Lenght", type: "numeric" },
                { title: "Price", field: "Price", type: "numeric" }
            ],
            modalData: {}
        };
    }

    componentDidMount(){
        this.props.getServiceList();
        this.props.getServiceCategoryList();
    }

    setModalData = (modalData) => {
        if(Object.keys(this.props.categoryList).length && this.props.categoryList[modalData.ServiceCategoryId]){
            modalData.categoryName = this.props.categoryList[modalData.ServiceCategoryId].ServiceCategory;
        }
       this.setState({modalData, showService : true});
    }

    handleModalClose = () => {
        this.setState({showService : false})
    }

    render() {

        const {classes, serviceList} = this.props;
        const { modalData, showService, data, columns } = this.state;
       
        return (
           <React.Fragment>
                <MaterialTable
                    title={''}
                    columns={columns}
                    data={serviceList}
                    actions={[{
                        icon: "more_vert",
                        tooltip: "Product Services",
                        onClick: (e, rowData) => this.setModalData(rowData)
                    }]}
                />
                {
                    showService && <ServiceModal
                        showService={showService}
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
        getServiceList: serviceAction.getServiceList,
        getServiceCategoryList: serviceAction.getServiceCategoryList
      },
      dispatch
    );
  }
  function mapStateToProps(state) {
    const { services } = state;
    return { 
        serviceList: services.serviceList,
        categoryList: services.categoryList,
     };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(ServiceList));