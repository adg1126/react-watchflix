import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../redux/user/usersActions';
import Signin from '../pages/Signin';

export default connect(null, { googleSignInStart, emailSignInStart })(Signin);
