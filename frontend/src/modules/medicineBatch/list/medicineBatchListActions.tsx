import MedicineBatchService from 'src/modules/medicineBatch/medicineBatchService';
import selectors from 'src/modules/medicineBatch/list/medicineBatchListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/medicineBatch/list/medicineBatchListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'MEDICINEBATCH_LIST';

const medicineBatchListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doClearAllSelected() {
    return {
      type: medicineBatchListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: medicineBatchListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: medicineBatchListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: medicineBatchListActions.RESETED,
    });

    dispatch(medicineBatchListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: medicineBatchListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await MedicineBatchService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.medicineBatch.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: medicineBatchListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: medicineBatchListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(medicineBatchListActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: medicineBatchListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(medicineBatchListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(medicineBatchListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: medicineBatchListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await MedicineBatchService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: medicineBatchListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineBatchListActions.FETCH_ERROR,
      });
    }
  },
};

export default medicineBatchListActions;
