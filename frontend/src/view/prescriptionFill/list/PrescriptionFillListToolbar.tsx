import { Button, TextField, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import HistoryIcon from '@material-ui/icons/History';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import prescriptionFillSelectors from 'src/modules/prescriptionFill/prescriptionFillSelectors';
import patientVisitSelectors from 'src/modules/patientVisit/list/patientVisitListSelectors';
import destroyActions from 'src/modules/prescriptionFill/destroy/prescriptionFillDestroyActions';
import destroySelectors from 'src/modules/prescriptionFill/destroy/prescriptionFillDestroySelectors';
import actions from 'src/modules/prescriptionFill/list/prescriptionFillListActions';
import selectors from 'src/modules/prescriptionFill/list/prescriptionFillListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'src/view/shared/styles/ToolbarWrapper';
import { Autocomplete, Box } from '@mui/material';

function PrescriptionFillToolbar(props) {
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
    prescriptionFillSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    prescriptionFillSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    prescriptionFillSelectors.selectPermissionToImport,
  );

  const patientVisitsLoading = useSelector(patientVisitSelectors.selectLoading);
  const patientVisitHasRows = useSelector(patientVisitSelectors.selectHasRows);
  const rows = useSelector(patientVisitSelectors.selectRows);

  const [selectedPatientVisit, setSelectedPatientVisit] = useState<any>(null);

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
      return <div>{button}</div>;
    }

    return (
      <>
        <Tooltip title={i18n('common.noDataToExport')}>
          <div>{button}</div>
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
          <div>{button}</div>
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <ToolbarWrapper>
      {hasPermissionToCreate && !patientVisitsLoading && patientVisitHasRows && (
        <Box sx={{display: 'flex', width: '100%', alignItems: 'center', gap: '1ch'}}>
        <Autocomplete 
          options={rows}
          value={selectedPatientVisit}
          onChange={(e, v) => setSelectedPatientVisit(v)}
          fullWidth
          getOptionLabel={(row: any) => `${row.patient.fullName} - ${row.visitDate}`}
          renderInput={(params) => <TextField label='patient visit' {...params}/>}
        />
        <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/prescription-fill/new/${selectedPatientVisit?.id}`}
          startIcon={<AddIcon />}
          size="small"
          disabled={!selectedPatientVisit}
        >
          {i18n('common.new')}
        </Button>
        </div>
        </Box>
      )}

      {hasPermissionToImport && (
        <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/prescription-fill/importer"
          startIcon={<CloudUploadIcon />}
          size="small"
        >
          {i18n('common.import')}
        </Button>
        </div>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <div>
        <Button
          component={Link}
          to="/audit-logs?entityNames=prescriptionFill"
          startIcon={<HistoryIcon />}
          size="small"
        >
          {i18n('auditLog.menu')}
        </Button>
        </div>
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

export default PrescriptionFillToolbar;
