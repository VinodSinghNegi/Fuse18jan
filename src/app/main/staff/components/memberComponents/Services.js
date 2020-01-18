import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormGroup from "@material-ui/core/FormGroup";
import { withRouter } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Divider, Button } from "@material-ui/core";
import { FuseChipSelect } from "@fuse/index";

import * as Actions from 'app/store/actions';
import * as serviceAction from "app/main/services/store/actions";
import * as staffAction from "app/main/staff/store/actions";

class Services extends Component {
  state = {
    selectAll: false,
    selectServices: []
  };

  componentDidMount(){
    this.props.getServiceList();
  }

  handleChange = async () => {
    await this.setState({ selectAll: !this.state.selectAll });

    if (this.state.selectAll) {
      await this.setState({ selectServices: this.props.serviceList.map(service => ({
        value: service.ServiceId,
        label: service.Service
      })) });
    } else {
      await this.setState({ selectServices: [] });
    }
  };
  handle = async event => {
    if (event) {
      await this.setState({
        selectServices: event
      });
    }
    if (this.state.selectServices.length === this.props.serviceList.length - 1) {
      await this.setState({ selectAll: false });
    } else if (
      this.state.selectServices.length === this.props.serviceList.length
    ) {
      await this.setState({ selectAll: true });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    if(id && new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(id)){
      this.state.selectServices.forEach(service => {
        this.props.createStaffServices({userId: id, serviceId: service.value});
      });
    }
  }
  render() {
    const { selectAll } = this.state;
    return (
      <React.Fragment>
        <form style={{width:"50%", padding:"10px"}} onSubmit={this.handleSubmit}>
          <div className="ml-20 pt-5">
            Assign Service that this member of staff can perform
          </div>
          <FormGroup row className="ml-20 pt-5">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAll}
                  onChange={this.handleChange}
                  value="selectAll"
                  color="primary"
                />
              }
              label={selectAll?"Deselect All Services":"Select All Services"}
            />
          </FormGroup>
          <Divider />
          <FuseChipSelect
            onChange={this.handle}
            value={this.state.selectServices.map(service => {
              return {
                value: service.value,
                label: service.label
              };
            })}
            placeholder="Select Services"
            isMulti
            textFieldProps={{
              variant: "outlined"
            }}
            options={this.props.serviceList.map(service => {
              return {
                value: service.ServiceId,
                label: service.Service
              };
            })}
            variant="fixed"
          />
          <div className="pl-10 pt-40 pb-10 ">
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "20%" }}
              type="submit"
            >
              Save
            </Button>
            </div>
        </form>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getServiceList: serviceAction.getServiceList,
      createStaffServices: staffAction.createStaffServices,
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
)(withRouter(Services));