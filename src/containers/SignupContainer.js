import { connect } from 'react-redux';
import { googleSignInStart, signUpStart } from '../redux/user/usersActions';
import Signup from '../pages/Signup';

export default connect(null, { googleSignInStart, signUpStart })(Signup);
