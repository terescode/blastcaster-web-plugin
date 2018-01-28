import {
  ImageType,
  selectImage,
  toggleImage
} from '../state/actions';
import {
  selectImagePickerTab
} from '../state/ui/actions';
import { connect } from 'react-redux';
import ImagePicker from '../components/ImagePicker';

const mapStateToProps = (state) => {
  return {
    pageData: state.pageData,
    selectedTab: state.imagePicker.selectedTab,
    selectedUrl: state.imagePicker.selectedUrl,
    useImage: state.imagePicker.useImage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTabChanged: (tab) => {
      dispatch(selectImagePickerTab(tab));
    },
    onImageSelected: (url) => {
      dispatch(selectImage(ImageType.URL, url));
    },
    onFileSelected: (data) => {
      dispatch(selectImage(ImageType.FILE, data));
    },
    onImageToggled: (e, checked) => {
      dispatch(toggleImage(checked));
    }
  };
};

const ImagePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePicker);

export default ImagePickerContainer;
