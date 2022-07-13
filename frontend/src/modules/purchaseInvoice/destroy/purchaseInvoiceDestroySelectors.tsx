import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseInvoice.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseInvoiceDestroySelectors = {
  selectLoading,
};

export default purchaseInvoiceDestroySelectors;
