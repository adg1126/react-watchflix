import { connect } from 'react-redux';
import { setTabIndex } from '../redux/tabs/tabsActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import Appbar from '../components/Appbar/Appbar';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { setTabIndex })(Appbar);
