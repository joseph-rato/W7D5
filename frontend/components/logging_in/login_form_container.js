import {connect} from 'react-redux';
import sessionForm from './session_form'
import {login} from '../../actions/session_actions'

const mapStateToProp = (state, ownProps) => {
  debugger;
  return ({
    errors: state.errors.session,
    formType: "login"
  });
}
const mapDispatchToProp = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(login(formUser))
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(sessionForm)
