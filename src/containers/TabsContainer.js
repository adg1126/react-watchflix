import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { selectTabIndex } from '../redux/tabs/tabsSelectors';
import { signOutStart } from '../redux/user/usersActions';
import { setTabIndex } from '../redux/tabs/tabsActions';
import Tabs from '../components/Appbar/Tabs';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  tabIndex: selectTabIndex
});

export default connect(mapStateToProps, { signOutStart, setTabIndex })(Tabs);
