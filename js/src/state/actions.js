/* eslint-env es6, webextensions */

/*
 * action types
 */

export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA';
export const RECEIVE_PAGE_DATA = 'RECEIVE_PAGE_DATA';
export const SELECT_IMAGE = 'SELECT_IMAGE';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_DESC = 'UPDATE_DESC';
export const UPDATE_LINK = 'UPDATE_LINK';
export const UPDATE_LINK_TEXT = 'UPDATE_LINK_TEXT';
export const UPDATE_LINK_INTRO = 'UPDATE_LINK_INTRO';
export const SEND_CREATE_REQUEST = 'SEND_CREATE_REQUEST';
export const RECV_CREATE_RESPONSE = 'RECV_CREATE_RESPONSE';

/*
 * other constants
 */

export const ImageType = {
  URL: 'URL',
  FILE: 'FILE'
};

/*
 * synchronous action creators
 */

export function requestPageData() {
  return { type: REQUEST_PAGE_DATA };
}

export function receivePageData(response) {
  return { type: RECEIVE_PAGE_DATA, response: response };
}

export function selectImage(type, image) {
  return { type: SELECT_IMAGE, data: {type: type, image: image}};
}

export function toggleImage(checked) {
  return (dispatch, getState) => {
    const state = getState();
    const imagePicker = state.imagePicker;
    var data = null;
    if (checked) {
      data = {
        type: imagePicker.selectedFile ? ImageType.FILE : ImageType.URL,
        image: imagePicker.selectedFile || imagePicker.selectedUrl
      };
    }

    dispatch({type: SELECT_IMAGE, data: data});
  };
}

export function addTag(tag) {
  return { type: ADD_TAG, tag: tag };
}

export function removeTag(tag) {
  return { type: REMOVE_TAG, tag: tag };
}

export function updateTitle(value) {
  return { type: UPDATE_TITLE, value: value };
}

export function updateDescription(value) {
  return { type: UPDATE_DESC, value: value };
}

export function updateLink(value) {
  return { type: UPDATE_LINK, value: value };
}

export function updateLinkText(value) {
  return { type: UPDATE_LINK_TEXT, value: value };
}

export function updateLinkIntro(value) {
  return { type: UPDATE_LINK_INTRO, value: value };
}

export function sendCreateRequest() {
  return { type: SEND_CREATE_REQUEST };
}

export function recvCreateResponse() {
  return { type: RECV_CREATE_RESPONSE };
}

/*
 * asynchronous action creators (thunks)
 */

export function inspectPage() {
  return function (dispatch) {
    // Dispatch our synchronous action to update the app state.
    dispatch(requestPageData());

    // Actually inspect the page
    chrome.runtime.sendMessage(
      {type: 'inspectPage'},
      (response) => {
        dispatch(receivePageData(response));
      }
    );
  };
}

export function createBlast() {
  return function (dispatch, getState) {
    const state = getState();
    // Dispatch our synchronous action to update the app state.
    dispatch(sendCreateRequest());

    this.suggestResponse =
      fetch(
        'http://manufacturingstories.com/wp/v2/posts',
        {
          method: 'POST',
          redirect: 'follow',
          credentials: 'same-origin'
        }
      ).then(
        (response) => this.suggestionComplete(null, response),
        (error) => this.suggestionComplete(error)
      );
  };
}
