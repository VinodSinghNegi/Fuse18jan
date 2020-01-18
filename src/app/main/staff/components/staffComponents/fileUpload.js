import React from "react";
import ImageUploader from "react-images-upload";

class App extends React.Component {
  state = { pictures: null };

  onDrop = picture => {
    this.setState({
      pictures: picture
    });
  };

  render() {
    return (
      <ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText="Choose images"
        withLabel={false}
        singleImage={true}
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}
export default App;
