import { createSelector } from 'reselect';

const selecTabs = state => state.tabs;

export const selectTabIndex = createSelector(
  [selecTabs],
  tabs => tabs.tabIndex
);

export const selectDrawerOpen = createSelector(
  [selecTabs],
  tabs => tabs.drawerOpen
);
