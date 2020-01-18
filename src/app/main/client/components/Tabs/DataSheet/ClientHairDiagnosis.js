import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core";

const styles = theme => ({

});

interface Props { }

interface State { }

class ClientHairDiagnosis extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Date Photo', field: 'date_photo' },
                { title: 'View photo', field: 'view_photo', render: rowData => <img src={rowData.view_photo} alt="shgd" style={{ width: 40, borderRadius: '50%' }} /> },
                { title: 'Notes', field: 'notes' },
            ],
            data: [
                { date_photo: '21/3/2018', view_photo: 'http://angular-material.fusetheme.com/assets/images/logos/fuse.svg', notes: 'jhchhhk' },
                { date_photo: '21/3/2018', view_photo: 'http://angular-material.fusetheme.com/assets/images/logos/fuse.svg', notes: 'jhchhhk' },
                { date_photo: '21/3/2018', view_photo: 'http://angular-material.fusetheme.com/assets/images/logos/fuse.svg', notes: 'jhchhhk' },
                { date_photo: '21/3/2018', view_photo: 'http://angular-material.fusetheme.com/assets/images/logos/fuse.svg', notes: 'jhchhhk' },

            ]

        };
    }

    render() {
        const { data, columns } = this.state;
        return (
            <React.Fragment>
                <MaterialTable
                    title='HAIR DIAGNOSIS'
                    columns={columns}
                    data={data} 
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.data;
                                        data.push(newData);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            })
                    }}
                />
            </React.Fragment>
        );
    }

}

export default withStyles(styles, { withTheme: true })(ClientHairDiagnosis);
