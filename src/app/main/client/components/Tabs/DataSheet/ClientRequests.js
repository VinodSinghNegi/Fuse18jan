import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core";

const styles = theme => ({

});

interface Props { }

interface State { }

class ClientRequests extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Date Request', field: 'date' },
                { title: 'Request Note', field: 'request_note' },
            ],
            data: [
                { date: 'Mehmet', request_note: 'Note#1'},
                { date: 'Mehmet', request_note: 'Note#2'},
                { date: 'Mehmet', request_note: 'Note#3'},
                { date: 'Mehmet', request_note: 'Note#4'},

            ]

        };
    }

    render() {
        const { data, columns } = this.state;
        return (
            <React.Fragment>
                <MaterialTable
                    title='CLIENT REQUESTS'
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

export default withStyles(styles, { withTheme: true })(ClientRequests);
