import React, { Component, Fragment } from "react";
import ImageLoader from "./content loaders/ImageLoader";

class ImageCard extends Component {
  state = {
    loadedErrorMessage: "",
    imageUrl: "",
    imageLoaded: false
  };

  renderImage(data) {
    const { image, size } = data;
    const { imageLoaded, loadedErrorMessage, imageUrl } = this.state;
    return (
      <Fragment>
        {!imageLoaded && loadedErrorMessage.length === 0 && (
          <ImageLoader size={size} />
        )}
        {loadedErrorMessage.length !== 0 && (
          <span id="image-error-placeholder">
            <h1>{loadedErrorMessage}</h1>
            <p id="error-symbol">!</p>
          </span>
        )}
        {imageLoaded && loadedErrorMessage.length === 0 && (
          <img
            src={imageUrl}
            className="image"
            alt="Random cap"
            onLoad={this.imageRenderedStatus}
          />
        )}

        <img
          src={image || ""}
          className="hide"
          onLoad={this.imageRenderedStatus(image)}
          onError={this.handleImageLoadError}
          alt="userImage"
        />
      </Fragment>
    );
  }

  handleImageLoadError = () => {
    this.setState({
      loadedErrorMessage: "Unable to fetch image",
      imageUrl: "https://picfsum.photos/230/300/?random"
    });
    this.src = "hello";
  };

  imageRenderedStatus = image => () => {
    this.setState({
      imageLoaded: true,
      imageUrl: image,
      loadedErrorMessage: ""
    });
  };

  render() {
    const { imageData } = this.props;
    return <div>{this.renderImage(imageData)}</div>;
  }
}

export default ImageCard;
