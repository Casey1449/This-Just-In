import { connect } from 'react-redux';
import AuthBox from '../components/AuthBox';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBox);
