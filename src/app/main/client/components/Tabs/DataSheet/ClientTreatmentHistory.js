import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core";

const styles = theme => ({

});

interface Props { }

interface State { }

class ClientTreatmentHistory extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Date purchased', field: 'date_purchased' },
                { title: 'Product name', field: 'product_name' },
                { title: 'Qty', field: 'qty' },
                { title: 'Sold by(staff name)', field: 'soldby' },
                { title: 'Total', field: 'total' },
            ],
            data: [
                { date_purchased: '17/12/2018', product_name: 'bjhdj', qty: '1', soldby: 'FDDHH', total: '235' },
                { date_purchased: '17/12/2018', product_name: 'bjhdj', qty: '1', soldby: 'FDDHH', total: '235' },
                { date_purchased: '17/12/2018', product_name: 'bjhdj', qty: '1', soldby: 'FDDHH', total: '235' },
                { date_purchased: '17/12/2018', product_name: 'bjhdj', qty: '1', soldby: 'FDDHH', total: '235' },
                { date_purchased: '17/12/2018', product_name: 'bjhdj', qty: '1', soldby: 'FDDHH', total: '235' },
                

            ]

        };
    }

    render() {
        const { data, columns } = this.state;
        return (
            <React.Fragment>
                <MaterialTable
                    title='PRODUCTS/SERVICES PURCHASED'
                    columns={columns}
                    data={data}    
                />
            </React.Fragment>
        );
    }

}

export default withStyles(styles, { withTheme: true })(ClientTreatmentHistory);
