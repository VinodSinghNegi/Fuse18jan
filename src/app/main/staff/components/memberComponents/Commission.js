import React, { Component } from "react";
import { TextField, Grid, Button, InputAdornment } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from 'app/store/actions';
import * as commisionAction from "app/store/actions/apiActions/commission.actions";

class Commision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null,
      service: null,
      product: null
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value,10)
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    if (
      id &&
      new RegExp(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      ).test(id)
    ) {
      this.props.createCommission({...this.state, userId: id});
    }
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <Grid container>
          <Grid>
            <div xs={4} className="ml-40 pt-5">
              <TextField
                autoFocus
                className="mt-8 mb-16"
                label="Service Commission"
                id="serviceCommission"
                name="service"
                value={this.state.service}
                onChange={this.handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                required
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid>
            <div xs={4} className="ml-40 pt-5">
              <TextField
                className="mt-8 mb-16"
                label="Product Commision"
                id="productCommission"
                name="product"
                value={this.state.product}
                onChange={this.handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                required
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid>
            <div xs={4} className="ml-40 pt-5">
              <TextField
                className="mt-8 mb-16"
                label="Start/Stop Commission"
                id="startStopCommission"
                name="work"
                value={this.state.work}
                onChange={this.handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="pt-80 pb-10 pl-40">
              <Button variant="contained" type="button">Cancel</Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "15%" }}
                type="submit"
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createCommission: commisionAction.createCommission,
      showMessage: Actions.showMessage,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { services } = state;
  return { 
    serviceList: services.serviceList,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Commision));
