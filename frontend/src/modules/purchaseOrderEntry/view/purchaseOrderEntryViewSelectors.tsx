import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseOrderEntry.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseOrderEntryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default purchaseOrderEntryViewSelectors;
