import {
  updateTitle,
  updateDescription,
  updateLink,
  updateLinkText,
  updateLinkIntro,
  createBlast
} from '../state/actions';
import { connect } from 'react-redux';
import BlastForm from '../components/BlastForm';

const mapStateToProps = (state) => {
  return {
    pageData: state.pageData,
    blast: state.blast
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (evt, newValue) => {
      dispatch(updateTitle(newValue));
    },
    onDescriptionChange: (evt, newValue) => {
      dispatch(updateDescription(newValue));
    },
    onLinkChange: (evt, newValue) => {
      dispatch(updateLink(newValue));
    },
    onLinkTextChange: (evt, newValue) => {
      dispatch(updateLinkText(newValue));
    },
    onLinkIntroChange: (evt, newValue) => {
      dispatch(updateLinkIntro(newValue));
    },
    onAddBlast: () => {
      dispatch(createBlast());
    }
  };
};

const BlastFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlastForm);

export default BlastFormContainer;
