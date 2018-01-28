import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  inspectPage
} from '../state/actions';
import SplashScreen from '../components/SplashScreen';
import BlastFormContainer from '../containers/BlastFormContainer';

class BlastApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(inspectPage());
  }

  render() {
    const { isInspecting, pageData, blast } = this.props;

    if (isInspecting) {
      return <SplashScreen />;
    }

    if (!pageData) {
      return <h1>Page data could not be loaded</h1>;
    }

    return (<BlastFormContainer
      pageData={pageData}
      blast={blast}
    />);
  }
}

BlastApp.propTypes = {
  isInspecting: PropTypes.bool.isRequired,
  pageData: PropTypes.object,
  blast: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isInspecting: state.isInspecting,
    pageData: state.pageData,
    blast: state.blast
  };
};

export default connect(mapStateToProps)(BlastApp);
