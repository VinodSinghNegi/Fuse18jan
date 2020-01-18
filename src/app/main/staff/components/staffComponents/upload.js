import React from "react";
import ReactDOM from "react-dom";

import FileBase64 from "./reactFileBase64";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <div className="text-center mt-25">
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
        </div>

        <div className="text-center">
          {this.state.files.map((file, i) => {
            return (
              <>
              <br/>
              <img
                src={this.state.files.base64}
                style={{
                  width: "200px",
                  height: "100px"
                }}
                key={i}
                src={file.base64}
              />
              </>
            );
          })}
          <img src="" />
        </div>
      </div>
    );
  }
}

export default App;
