import {connect} from 'react-redux';
import sessionForm from './session_form'
import {signup} from '../../actions/session_actions'

const mapStateToProp = (state, ownProps) =>{
  debugger;
  return ({
    errors: state.errors.session,
    formType: "signup"
  });
}
const mapDispatchToProp = (dispatch) => {
  return {
    processForm: (formUser) => dispatch(signup(formUser))
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(sessionForm)
