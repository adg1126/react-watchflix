import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDrawerOpen, selectTabIndex } from '../redux/tabs/tabsSelectors';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { setTabIndex, setDrawerOpen } from '../redux/tabs/tabsActions';
import { signOutStart } from '../redux/user/usersActions';
import Drawer from '../components/Appbar/Drawer';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  tabIndex: selectTabIndex,
  drawerOpen: selectDrawerOpen
});

export default connect(mapStateToProps, {
  setTabIndex,
  setDrawerOpen,
  signOutStart
})(Drawer);
