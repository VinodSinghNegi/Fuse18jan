import React, { Fragment } from "react";
import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const styles = theme => ({});

interface Props {}

interface State {}

class DaysClosed extends React.Component {
  toggle = async (id, data) => {
    console.log(id, data);
    const s = this.state;
    const arr = s.data.filter(d => {
      return d.tableData !== id;
    });
    data.isClosed = !data.isClosed;
    arr.splice(id.id, 0, data);
    s.data = arr;
    await this.setState({ ...s });
  };
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "DATE", field: "date" },
        {
          title: "CLOSED ?",
          field: "closed?",
          render: rowData =>
            rowData.isClosed ? (
              <button
                onClick={e => this.toggle(rowData.tableData, rowData)}
                style={{
                  backgroundColor: "green",
                  border: "none",
                  padding: "15px 32px",
                  color: "white",
                  textAlign: "center",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                {"Yes"}
              </button>
            ) : (
              <button
                onClick={e => this.toggle(rowData.tableData, rowData)}
                style={{
                  backgroundColor: "red",
                  border: "none",
                  padding: "15px 32px",
                  color: "white",
                  textAlign: "center",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                {"No"}
              </button>
            )
        }
      ],
      data: [
        { date: "01/01 - New Year's Day", isClosed: true },
        { date: "06/01 - Epiphany", isClosed: false }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <div className={"text-right"}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mx-auto my-16 mr-12"
            aria-label="Add"
            // disabled={!isFormValid}
          >
            +NEW
          </Button>
        </div>
        <MaterialTable
          title=""
          columns={this.state.columns}
          data={this.state.data}
          actions={this.state.actions}
        />
      </Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(DaysClosed);
