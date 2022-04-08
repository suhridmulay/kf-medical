import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineCategoryEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineCategoryEnumDestroySelectors = {
  selectLoading,
};

export default medicineCategoryEnumDestroySelectors;
