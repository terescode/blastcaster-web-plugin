/* eslint-env es6 */

import {combineReducers} from 'redux';
import imagePicker from './ui/reducers.js';
import {
  REQUEST_PAGE_DATA,
  RECEIVE_PAGE_DATA,
  SELECT_IMAGE,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_TITLE,
  UPDATE_DESC,
  UPDATE_LINK,
  UPDATE_LINK_TEXT,
  UPDATE_LINK_INTRO,
  ImageType
} from './actions';

function isInspecting(isInspecting = false, action) {
  if (action.type === REQUEST_PAGE_DATA) {
    return true;
  }
  if (action.type === RECEIVE_PAGE_DATA) {
    return false;
  }
  return isInspecting;
}

function error(err = null, action) {
  if (action.type === RECEIVE_PAGE_DATA) {
    return action.response.success ? null : action.response.result;
  }
  return err;
}

function pageData(pageData = null, action) {
  if (action.type === RECEIVE_PAGE_DATA) {
    return action.response.success ? action.response.result : null;
  }
  return pageData;
}

function blast(blast = null, action) {
  if (action.type === RECEIVE_PAGE_DATA && action.response.success) {
    var newBlast = Object.assign({}, blast),
      pageData = action.response.result;
    if (pageData.titles && 0 < pageData.titles.length) {
      newBlast.title = pageData.titles[0];
    }
    if (pageData.descriptions && 0 < pageData.descriptions.length) {
      newBlast.description = pageData.descriptions[0];
    }
    if (pageData.urls && 0 < pageData.urls.length) {
      newBlast.link = pageData.urls[0];
    }
    if (pageData.tags && 0 < pageData.tags.length) {
      newBlast.tags = pageData.tags.slice(
        0,
        Math.min(pageData.tags.length, 5)
      );
    }
    return newBlast;
  } else if (action.type === SELECT_IMAGE) {
    return {
      ...blast,
      image: action.image
    };
  } else if (action.type === ADD_TAG) {
    return {
      ...blast,
      tags: blast.tags.concat(action.tag)
    };
  } else if (action.type === REMOVE_TAG) {
    return {
      ...blast,
      tags: blast.tags.filter(tag => tag !== action.tag)
    };
  } else if (action.type === UPDATE_TITLE) {
    return {
      ...blast,
      title: action.value
    };
  } else if (action.type === UPDATE_DESC) {
    return {
      ...blast,
      description: action.value
    };
  } else if (action.type === UPDATE_LINK) {
    return {
      ...blast,
      link: action.value
    };
  } else if (action.type === UPDATE_LINK_TEXT) {
    return {
      ...blast,
      linkText: action.value
    };
  } else if (action.type === UPDATE_LINK_INTRO) {
    return {
      ...blast,
      linkIntro: action.value
    };
  }
  return blast;
}

/**
 * App state shape
 *
 * {
 *   isInspecting: false,
 *   error: null,
 *   pageData: {
 *     titles: [ 'title1', 'title2', ...],
 *     descriptions: [ 'desc1', 'desc2', ... ],
 *     urls: [ 'url1', 'url2', ... ],
 *     tags: [ 'tag1', 'tag2', ... ],
 *     images: [ 'imgUrl1', 'imgUrl2', ... ],
 *     allImages: [ 'imgUrl1', 'imgUrl2', ... ]
 *   },
 *   blast: {
 *     title: 'blast-title',
 *     image: {
 *       type: 'url',
 *       data: 'blast-image-url'
 *     },
 *     description: 'blast-description',
 *     tags: [ 'tag-1', 'tag-2', ... ],
 *     link: 'blast-link',
 *     linkText: 'blast-link-text',
 *     linkIntro: 'blast-link-intro-text'
 *   },
 *   ui: {
 *     componentState...
 *   }
 * }
 *
 */
const blastApp = combineReducers({
  isInspecting,
  error,
  pageData,
  blast,
  imagePicker
});

export default blastApp;
