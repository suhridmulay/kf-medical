import { createSelector } from 'reselect';

const selectRaw = (state) => state.prescriptionFill.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const prescriptionFillDestroySelectors = {
  selectLoading,
};

export default prescriptionFillDestroySelectors;
