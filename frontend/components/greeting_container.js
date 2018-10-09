import {connect} from 'redux';
import {logout} from '../actions/session_actions';
import Greeting from './greeting'

const mapStateToProp = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Greeting)
