import React, {PropTypes} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import styles from './ImageCarousel.css';
import {cyan50, grey400} from 'material-ui/styles/colors.js';

const inlineStyles = {
  wrapper: {
    backgroundColor: cyan50
  },
  gridTileSelected: {
    backgroundColor: grey400
  }
};

const ImageTile = ({
  url,
  selected,
  onChange
}) => {
  return (
    <GridTile
      className={selected ? styles['grid-tile-selected'] : styles['grid-tile']}
      style={selected ? inlineStyles.gridTileSelected : null}
      onTouchTap={() => onChange(url)}
    >
      <img className={styles['grid-tile-image']} src={url} />
    </GridTile>
  );
};

ImageTile.propTypes = {
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ImageCarousel = ({
  imageUrls,
  selectedUrl,
  onChange
}) => {
  return (
    <div className={styles.wrapper} style={inlineStyles.wrapper}>
      <GridList className={styles['grid-list']} cols={2}>
        {imageUrls.map((url) => {
          return (
            <ImageTile key={url} url={url} onChange={onChange} selected={url === selectedUrl} />
          );
        })}
      </GridList>
    </div>
  );
};

ImageCarousel.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  selectedUrl: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ImageCarousel;
