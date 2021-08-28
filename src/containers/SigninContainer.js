import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectErrMessage } from '../redux/user/userSelectors';
import {
  googleSignInStart,
  emailSignInStart
} from '../redux/user/usersActions';
import Signin from '../pages/Signin';

const mapStateToProps = createStructuredSelector({
  errMessage: selectErrMessage
});

export default connect(mapStateToProps, {
  googleSignInStart,
  emailSignInStart
})(Signin);
