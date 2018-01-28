import {
  SELECT_IMAGE_PICKER_TAB
} from './actions';
import {
  SELECT_IMAGE,
  ImageType
} from '../actions';

export default function imagePicker(
  picker = {
    selectedTab: 'recommended',
    selectedUrl: '',
    selectedFile: null,
    useImage: true
  },
  action) {
  if (action.type === SELECT_IMAGE) {
    if (!action.data) {
      picker = {
        ...picker,
        useImage: false
      };
    } else if (action.data.type === ImageType.URL) {
      picker = {
        ...picker,
        useImage: true,
        selectedUrl: action.data.image
      };
    } else if (action.data.type === ImageType.FILE) {
      picker = {
        ...picker,
        useImage: true,
        selectedFile: action.data.image
      };
    }
  } else if (action.type === SELECT_IMAGE_PICKER_TAB) {
    picker = {
      ...picker,
      selectedTab: action.tab
    };
  }
  return picker;
}
