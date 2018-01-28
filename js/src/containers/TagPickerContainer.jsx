import {
  addTag,
  removeTag
} from '../state/actions';
import { connect } from 'react-redux';
import TagPicker from '../components/TagPicker';

const mapStateToProps = (state) => {
  return {
    tags: state.blast.tags,
    menuOpen: false,
    suggestions: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddChip: (chip) => {
      dispatch(addTag(chip));
    },
    onDeleteChip: (chip) => {
      dispatch(removeTag(chip));
    },
    onUpdateInput: (searchText, dataSource, params) => {
      // TODO
    }
  };
};

const TagPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagPicker);

export default TagPickerContainer;
