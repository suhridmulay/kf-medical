import { createSelector } from 'reselect';

const selectRaw = (state) => state.visitTickets.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const visitTicketsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default visitTicketsViewSelectors;
