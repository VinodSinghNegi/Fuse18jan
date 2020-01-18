import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";

export default class FileBase64 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange(e) {
    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + " kB",
          base64: reader.result,
          file: file
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length == files.length) {
          // Apply Callback function
          if (this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }
      }; // reader.onload
    } // for
  }

  render() {
    return (
      <>
        <input
          style={{ display: "none" }}
          type="file"
          id="upload"
          onChange={this.handleChange.bind(this)}
          multiple={this.props.multiple}
        />
        <label htmlFor="upload">
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            variant="contained"
            color="secondary"
            component="span"
            size="small"
            startIcon={<CloudUploadIcon />}
          >
            {this.state.files.base64 ? "Change Image" : "Upload Image"}
          </Button>
        </label>
      </>
    );
  }
}

FileBase64.defaultProps = {
  multiple: false
};
