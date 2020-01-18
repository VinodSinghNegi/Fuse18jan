import { render } from "react-dom";
import { connect } from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import * as React from "react";
import {
  Day,
  WorkWeek,
  Month,
  ScheduleComponent,
  ResourcesDirective,
  ResourceDirective,
  ViewsDirective,
  ViewDirective,
  Inject,
  TimelineViews,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { extend } from "@syncfusion/ej2-base";
import * as dataSource from './datasource.json';
import * as staffAction from "app/main/staff/store/actions";
import * as clientAction from "app/main/client/store/actions";
import * as agendaAction from "app/main/agenda/store/actions";
/**
 * schedule resources group-editing sample
 */
const styles = theme => ({
  layoutRoot: {}
});
export class Agenda extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.resourceConferenceData, null, true);
    // this.resourceData = [
    //   { Text: "Margaret", Id: 1, Color: "#1aaa55" },
    //   { Text: "Robert", Id: 2, Color: "#357cd2" },
    //   { Text: "Laura", Id: 3, Color: "#7fa900" }
    // ];
  }

  componentDidMount() {
    this.props.getStaffServices()
    this.props.getStaffList();
    this.props.getClientList();
      // .then(() => {
      //   console.log(this.props.staffServices)
      // });
      // this.props.getAgendaList();
  }

  // function that to be called on save button
  onActionBegin(args) {
    if (
      args.requestType === "eventCreate" ||
      args.requestType === "eventChange"
      ) {
        console.log("TCL: Agenda -> onActionBegin -> args", args)
      
      // let data = args.data instanceof Array ? args.data[0] : args.data;
      // if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
      //   args.cancel = true;
      // }
    }
  }
  popupOpen = (e) => {
    console.log("TCL: Agenda -> popupOpen -> e", e) 
  }
  // custom modal content

  editorTemplate(props) {
    console.log("TCL: Agenda -> editorTemplate -> props", props)
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Client Name</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="client"
                placeholder="Choose client"
                data-name="clientId"
                fields={{ text: 'Name', value: 'ClientId' }}
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.props.clientList}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Assigned staff</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="staff"
                placeholder="Choose staff"
                data-name="staffId"
                fields={{text: 'FirstName', value: 'UserId'}}
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.props.staffList}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Service</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="service"
                placeholder="Choose service"
                data-name="service"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.props.userServiceList}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="StartTime"
                format="dd/MM/yy hh:mm a"
                data-name="StartTime"
                value={new Date(props.startTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="EndTime"
                format="dd/MM/yy hh:mm a"
                data-name="EndTime"
                value={new Date(props.endTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  }
  getEmployeeName(value) {
    return ((value.resourceData) ?
    value.resourceData.FirstName +' '+ value.resourceData.LastName:
        null);
  }
  getEmployeeImage(value) {
    let resourceName = this.getEmployeeName(value);
    return resourceName.replace(" ", "-").toLowerCase();
  }
  getEmployeeDesignation(value) {
    return null;
  }
  monthEventTemplate(props) {
    return <div className="subject">{props.Subject}</div>;
  }
  resourceHeaderTemplate(props) {
    return (
      <div className="template-wrap">
        <div className="resource-image"><img src={'assets/images/avatars/profile.jpg'}/></div>
        <div className="resource-details">
          <div className="resource-name">{this.getEmployeeName(props)}</div>
          <div className="resource-designation">
            {this.getEmployeeDesignation(props)}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div className="col-lg-12 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              cssClass="group-editing"
              width="100%"
              height="650px"
              selectedDate={new Date()}
              currentView="Day"
              ref={schedule => (this.scheduleObj = schedule)}
              resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
              eventSettings={{
                dataSource: this.data
              }}
              editorTemplate={this.editorTemplate.bind(this)}
              actionBegin={this.onActionBegin.bind(this)}
              popupOpen={this.popupOpen}
              showQuickInfo={false} /* to show/hide first mini modal*/
              timeScale={{ interval: 60, slotCount: 1 }}
              group={{ allowGroupEdit: true, resources: ["Conferences"] }}
            >
              {/* dropdown */}
              <ResourcesDirective>
                <ResourceDirective
                  field="ConferenceId"
                  title="Attendees"
                  name="Conferences"
                  allowMultiple={true}
                  dataSource={this.props.staffList}
                  textField="Text"
                  idField="Id"
                  colorField="Color"
                ></ResourceDirective>
              </ResourcesDirective>

              {/* view selection */}
              <ViewsDirective>
                <ViewDirective option="Day" />
                {/* <ViewDirective option="WorkWeek" />
                <ViewDirective
                  option="Month"
                  eventTemplate={this.monthEventTemplate.bind(this)}
                />
                <ViewDirective option="TimelineWeek" /> */}
              </ViewsDirective>

              {/* view selection options */}
              <Inject services={[Day, /*WorkWeek, Month, TimelineViews,*/ Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getStaffList: staffAction.getStaffList,
      getStaffServices: staffAction.getStaffServices,
      getClientList: clientAction.getClientList,
      getAgendaList: agendaAction.getAgendaList,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  const { staff, agenda, client } = state;
  return { 
    staffList: staff.staffList,
    clientList: client.clientList,
    staffServices: staff.staffServices,
    agendaList: agenda.agendaList,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(Agenda));