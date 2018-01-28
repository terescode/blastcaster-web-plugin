import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import CategoryPicker from './CategoryPicker';
import ImagePickerContainer from '../containers/ImagePickerContainer';
import TagPickerContainer from '../containers/TagPickerContainer';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './BlastForm.css';

const BlastForm = ({
  categories,
  pageData,
  blast,
  onTitleChange,
  onDescriptionChange,
  onLinkChange,
  onLinkTextChange,
  onLinkIntroChange,
  onAddBlast
}) => {
  return (
    <MuiThemeProvider>
      <div className="wrap">
        <div className={styles.wrapper}>
          <p>Create a new blast using the fields below.</p>
          <form name="blastcaster-form" id="blastcaster-form" method="post" encType="multipart/form-data">
            <TextField
              hintText="Enter a title for the blast"
              floatingLabelText="Title"
              floatingLabelFixed={true}
              multiLine={true}
              rows={1}
              rowsMax={3}
              id="bc-add-title"
              name="bc-add-title"
              fullWidth={true}
              value={blast.title}
              onChange={onTitleChange}
            />
            { categories &&
              <CategoryPicker
                categories={categories}
                defaultValue={blast.categories}
                fieldName="bc-add-cat[]"
              />
            }
            <ImagePickerContainer/>
            <TextField
              hintText="Enter a description for the blast"
              floatingLabelText="Description"
              floatingLabelFixed={true}
              multiLine={true}
              rows={1}
              rowsMax={4}
              id="bc-add-desc"
              name="bc-add-desc"
              fullWidth={true}
              value={blast.description}
              onChange={onDescriptionChange}
            />
            <TagPickerContainer/>
            <TextField
              hintText="Enter the URL for the link to the original article"
              floatingLabelText="Link URL"
              floatingLabelFixed={true}
              multiLine={false}
              rows={1}
              id="bc-add-link"
              name="bc-add-link"
              fullWidth={true}
              value={blast.link}
              onChange={onLinkChange}
            />
            <TextField
              hintText="Enter the text for the link to the original article"
              floatingLabelText="Link text"
              floatingLabelFixed={true}
              multiLine={false}
              rows={1}
              id="bc-add-link-text"
              name="bc-add-link-text"
              fullWidth={true}
              value={blast.linkText}
              onChange={onLinkTextChange}
            />
            <TextField
              hintText="Enter the introductory text to appear before the link to the original article"
              floatingLabelText="Link introduction text"
              floatingLabelFixed={true}
              multiLine={false}
              rows={1}
              id="bc-add-link-intro"
              name="bc-add-link-intro"
              fullWidth={true}
              value={blast.linkIntro}
              onChange={onLinkIntroChange}
            />
            <RaisedButton
              label="Add blast"
              primary={true}
              className={styles.submit}
              onClick={onAddBlast}
            />
          </form>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

BlastForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object
  ),
  pageData: PropTypes.object.isRequired,
  blast: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onLinkChange: PropTypes.func.isRequired,
  onLinkTextChange: PropTypes.func.isRequired,
  onLinkIntroChange: PropTypes.func.isRequired,
  onAddBlast: PropTypes.func.isRequired
};

export default BlastForm;
