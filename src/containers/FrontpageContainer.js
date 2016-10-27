import { connect } from 'react-redux';
import Frontpage from '../components/Frontpage';
import { bindActionCreators } from 'redux';
import { getWapo } from '../actions/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getWapo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
