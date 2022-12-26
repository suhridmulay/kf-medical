import { createSelector } from 'reselect';

const selectRaw = (state) => state.visitTickets.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const visitTicketsDestroySelectors = {
  selectLoading,
};

export default visitTicketsDestroySelectors;
