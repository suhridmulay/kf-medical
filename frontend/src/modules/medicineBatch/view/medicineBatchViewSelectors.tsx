import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineBatch.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineBatchViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default medicineBatchViewSelectors;
