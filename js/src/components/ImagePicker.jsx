import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import Toggle from 'material-ui/Toggle';
import ImageCarousel from './ImageCarousel';
import ImageDropZone from './ImageDropZone';
import FloatingLabel from './FloatingLabel';
import styles from './ImagePicker.css';
import {cyan50, cyan500} from 'material-ui/styles/colors.js';

const inlineStyles = {
  noImage: {
    backgroundColor: cyan50
  },
  uploadLink: {
    color: cyan500
  }
};

/*
<div className={styles['no-image']} style={inlineStyles.noImage}>
  <input type="file" name="bc-add-image-file" id="bc-add-image-file" onChange={onFileSelected} />
  <h2><label htmlFor="bc-add-image-file"><span className={styles['upload-link']} style={inlineStyles.uploadLink}>Choose a file</span></label> to upload</h2>
  <h3>Currently selected: {'TODO'}</h3>
</div>
*/

const ImagePicker = ({
  pageData,
  selectedTab = 'recommended',
  selectedUrl = '',
  useImage = true,
  onTabChanged,
  onImageSelected,
  onFileSelected,
  onImageToggled,
}) => {
  var recommended,
    all;
  if (pageData.images && 0 < pageData.images.length) {
    recommended = <ImageCarousel
      imageUrls={pageData.images}
      selectedUrl={selectedUrl}
      onChange={onImageSelected}
    />;
  } else {
    recommended = (
      <div className={styles['no-image']}>
        <h2>No recommended images</h2>
      </div>
    );
  }
  if (pageData.allImages && 0 < pageData.allImages.length) {
    all = <ImageCarousel
      imageUrls={pageData.allImages}
      selectedUrl={selectedUrl}
      onChange={onImageSelected}
    />;
  } else {
    all = (
      <div className={styles['no-image']} style={inlineStyles.noImage}>
        <h2>No images</h2>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <FloatingLabel label="Image" />
      <Tabs
        value={selectedTab}
        onChange={onTabChanged}
      >
        <Tab label="Recommended" value="recommended">
          {recommended}
        </Tab>
        <Tab label="All" value="all">
          {all}
        </Tab>
        <Tab label="Upload" value="upload">
          <ImageDropZone />
        </Tab>
      </Tabs>
      <Toggle
        label="Include image in blast"
        labelPosition="right"
        toggled={useImage}
        className={styles['img-toggle']}
        onToggle={onImageToggled}
      />
    </div>
  );
};

ImagePicker.propTypes = {
  pageData: PropTypes.object.isRequired,
  selectedTab: PropTypes.string,
  selectedUrl: PropTypes.string,
  useImage: PropTypes.bool,
  onTabChanged: PropTypes.func.isRequired,
  onImageSelected: PropTypes.func.isRequired,
  onFileSelected: PropTypes.func.isRequired,
  onImageToggled: PropTypes.func.isRequired
};

export default ImagePicker;
