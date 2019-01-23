
import React, { Component, Fragment } from 'react';
import ContentLoader from 'react-content-loader';

class ImageLoader extends Component {
  render() {
    const { size: { height, width } } = this.props;
    return (
      <Fragment>
        <ContentLoader
          rtl
          height={height}
          width={width}
          speed={2}
          primaryColor="#f3f3f3"
        >
          <rect x="0" y="0" rx="3" ry="3" width="201" height="272" />
        </ContentLoader>
      </Fragment>
    );
  }
}

export default ImageLoader;