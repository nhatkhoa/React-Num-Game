import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../core/actions'

const mapStateToProps = (state) => Object.assign({}, state, {
  isLoading: state.common.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)
