import { Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import HistoryIcon from '@material-ui/icons/History';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import visitTicketsSelectors from 'src/modules/visitTickets/visitTicketsSelectors';
import destroyActions from 'src/modules/visitTickets/destroy/visitTicketsDestroyActions';
import destroySelectors from 'src/modules/visitTickets/destroy/visitTicketsDestroySelectors';
import actions from 'src/modules/visitTickets/list/visitTicketsListActions';
import selectors from 'src/modules/visitTickets/list/visitTicketsListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'src/view/shared/styles/ToolbarWrapper';

function VisitTicketsToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    visitTicketsSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    visitTicketsSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    visitTicketsSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabledWithTooltip = !hasRows || loading;

    const button = (
      <Button
        type="button"
        disabled={disabledWithTooltip || exportLoading}
        onClick={doExport}
        startIcon={<DescriptionIcon />}
        size="small"
      >
        {i18n('common.export')}
      </Button>
    );

    if (!disabledWithTooltip) {
      return button;
    }

    return (
      <>
        <Tooltip title={i18n('common.noDataToExport')}>
          <span>{button}</span>
        </Tooltip>
      </>
    );
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <Button
        variant="contained"
        color="primary"
        type="button"
        disabled={destroyLoading || disabled}
        onClick={doOpenDestroyAllConfirmModal}
        startIcon={<DeleteIcon />}
        size="small"
      >
        {i18n('common.destroy')}
      </Button>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          <span>{button}</span>
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <ToolbarWrapper>
      {hasPermissionToCreate && (
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/visit-tickets/new"
          startIcon={<AddIcon />}
          size="small"
        >
          {i18n('common.new')}
        </Button>
      )}

      {hasPermissionToImport && (
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/visit-tickets/importer"
          startIcon={<CloudUploadIcon />}
          size="small"
        >
          {i18n('common.import')}
        </Button>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Button
          component={Link}
          to="/audit-logs?entityNames=visitTickets"
          startIcon={<HistoryIcon />}
          size="small"
        >
          {i18n('auditLog.menu')}
        </Button>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </ToolbarWrapper>
  );
}

export default VisitTicketsToolbar;
