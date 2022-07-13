import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseOrderEntry.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseOrderEntryDestroySelectors = {
  selectLoading,
};

export default purchaseOrderEntryDestroySelectors;
