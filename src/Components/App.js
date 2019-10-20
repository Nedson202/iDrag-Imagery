import React from "react";

import "../App.css";
import images from "../Assets/images";
import ImageCard from "./ImageCard";

const renderImages = () => {
  return (
    <div className="image-list">
      {images.map(data => (
        <ImageCard key={data.id} imageData={data} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <p className="page-title">The iDrag Imagery</p>
      {renderImages()}
    </div>
  );
}

export default App;
