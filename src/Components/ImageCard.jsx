import React, { Component, Fragment } from "react";
import ImageLoader from "../ContentLoaders/ImageLoader";

class ImageCard extends Component {
  state = {
    loadedErrorMessage: '',
    imageUrl: '',
    imageLoaded: false,
  };

  handleImageLoadError = () => {
    this.setState({
      loadedErrorMessage: "Unable to fetch image",
    });
  };

  imageRenderedStatus = image => () => {
    this.setState({
      imageLoaded: true,
      imageUrl: image,
      loadedErrorMessage: '',
    });
  };

  renderImage(imageData) {
    const { image, size } = imageData;
    const { loadedErrorMessage, imageUrl, imageLoaded } = this.state;
    
    if (!imageLoaded && !loadedErrorMessage.length) {
      return (
        <Fragment>
          <ImageLoader size={size} />
          <img
            src={image || ''}
            className="hide"
            onLoad={this.imageRenderedStatus(image)}
            onError={this.handleImageLoadError}
            alt="userImage"
          />
        </Fragment>
      )
    }

    if (loadedErrorMessage.length) {
      return (
        <span id="image-error-placeholder">
          <h1>{loadedErrorMessage}</h1>
          <p id="error-symbol">!</p>
        </span>
      )
    }

    return (
      <img
        src={imageUrl}
        className="image"
        alt="Random cap"
        onLoad={this.imageRenderedStatus}
      />
    )
  }

  render() {
    const { imageData } = this.props;
    return (
      <div>
        {this.renderImage(imageData)}
      </div>
    )
  }
}

export default ImageCard;
