/* eslint-env es6, webextensions */

/*
 * action types
 */
 export const SELECT_IMAGE_PICKER_TAB = 'SELECT_IMAGE_PICKER_TAB';


/*
 * action creators
 */

export function selectImagePickerTab(tab) {
  return {type: SELECT_IMAGE_PICKER_TAB, tab: tab};
}
