import { createSelector } from 'reselect';

const selectRaw = (state) => state.purchaseOrder.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const purchaseOrderDestroySelectors = {
  selectLoading,
};

export default purchaseOrderDestroySelectors;
