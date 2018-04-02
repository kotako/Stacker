import { connect } from 'react-redux';
import { blankAction } from './actions';

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  onEventFire: id => dispatch(blankAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Component);
