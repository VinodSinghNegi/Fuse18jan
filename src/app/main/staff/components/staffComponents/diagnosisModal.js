import React, { Component } from "react";
import { Paper, TextField, Button, Modal, Divider } from "@material-ui/core";
import Upload from "./upload";
class Diagnosis extends Component {
  render() {
    return (
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={e => this.props.closeButton()}
      >
        <Paper>
          <div
            style={{
              background: "#192D3E",
              padding: "20px",
              color: "white"
            }}
          >
            Hair Diagnosis
            <Button
              onClick={e => this.props.closeButton()}
              style={{ float: "right", color: "white", padding: "0px" }}
            >
              X
            </Button>
          </div>
          <div className="max-w-md p-5">
            <TextField
              className="mt-8 mb-16"
              label="Title"
              autoFocus
              id="title"
              name="title"
              required
              value="Hair Diagnosis"
              variant="outlined"
              disabled
              fullWidth
            />
            <Divider />
            <div className="p-20">
              <Upload />
            </div>
            <Divider />
          </div>

          <div className="max-w-md p-5">
            <TextField
              className="mb-16"
              label="Add Note"
              id="note"
              name="note"
              //   onChange={}
              type="text"
              //   value={}
              placeholder="Add a note regarding Hair Diagnosis"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
            />
          </div>

          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              className={"m-10"}
              onClick={e => this.props.closeButton()}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={"m-10"}
              onClick={e => this.props.closeButton()}
            >
              Save
            </Button>
          </div>
        </Paper>
      </Modal>
    );
  }
}
export default Diagnosis;
