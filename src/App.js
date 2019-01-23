import React, { Component } from "react";
import "./App.css";
import images from "./helper/images";
import NetworkDetector from "./Hoc/NetworkDetector";
import ImageCard from "./ImageCard";

class App extends Component {
  state = {
    loadedErrorMessage: "",
    imageUrl: "",
    imageLoaded: false
  };

  renderImages() {
    return (
      <div className="image-list">
        {images.map(data => (
          <ImageCard key={data.id} imageData={data} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <p className="page-title">The iDrag Imagery</p>
        {this.renderImages()}
      </div>
    );
  }
}

export default NetworkDetector(App);
