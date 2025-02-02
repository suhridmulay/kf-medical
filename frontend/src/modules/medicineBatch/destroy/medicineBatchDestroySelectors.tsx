import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineBatch.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineBatchDestroySelectors = {
  selectLoading,
};

export default medicineBatchDestroySelectors;
