import { createSelector } from 'reselect';

const selectRaw = (state) => state.siteInventory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const siteInventoryDestroySelectors = {
  selectLoading,
};

export default siteInventoryDestroySelectors;
