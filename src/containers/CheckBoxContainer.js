import { connect } from 'react-redux';
import CheckBox from '../components/CheckBox';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
