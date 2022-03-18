import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineCategoryEnum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineCategoryEnumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default medicineCategoryEnumViewSelectors;
