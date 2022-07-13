import { createSelector } from 'reselect';

const selectRaw = (state) => state.siteInventory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const siteInventoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default siteInventoryViewSelectors;
