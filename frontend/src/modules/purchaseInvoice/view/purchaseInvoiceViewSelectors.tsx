import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseInvoice.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseInvoiceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default purchaseInvoiceViewSelectors;
