import { Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import HistoryIcon from '@material-ui/icons/History';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import purchaseInvoiceSelectors from 'src/modules/purchaseInvoice/purchaseInvoiceSelectors';
import destroyActions from 'src/modules/purchaseInvoice/destroy/purchaseInvoiceDestroyActions';
import destroySelectors from 'src/modules/purchaseInvoice/destroy/purchaseInvoiceDestroySelectors';
import actions from 'src/modules/purchaseInvoice/list/purchaseInvoiceListActions';
import selectors from 'src/modules/purchaseInvoice/list/purchaseInvoiceListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'src/view/shared/styles/ToolbarWrapper';
import PurchaseOrderService from 'src/modules/purchaseOrder/purchaseOrderService';
import {
  Autocomplete,
  Box,
  TextField,
} from '@mui/material';

function PurchaseInvoiceToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [selectedPurchaseOrder, setSelectedPurchaseOrder] =
    useState(null);

  // Fetch a list of all purchase orders on mount
  useEffect(() => {
    PurchaseOrderService.list().then((res) => {
      setPurchaseOrders(res.rows);
      setSelectedPurchaseOrder(res.rows[0]);
    });
  }, []);

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
    purchaseInvoiceSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    purchaseInvoiceSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    purchaseInvoiceSelectors.selectPermissionToImport,
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
        <Box
          sx={{
            display: 'flex',
            gap: '2ch',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <Autocomplete
            size="small"
            fullWidth
            value={selectedPurchaseOrder}
            options={purchaseOrders}
            renderInput={(params) => (
              <TextField {...params} />
            )}
            getOptionLabel={(option) => option.purchaseOrderLookup}
            onChange={(e, v) => v ? setSelectedPurchaseOrder(v) : setSelectedPurchaseOrder(null)}
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/purchase-invoice/new/${selectedPurchaseOrder?.id ?? ''}`}
              startIcon={<AddIcon />}
              size="small"
              disabled={!selectedPurchaseOrder}
            >
              {i18n('common.new')}
            </Button>
          </Box>
        </Box>
      )}
      <Box
        sx={{ display: 'flex', width: '100%', gap: '2ch' }}
      >
        {hasPermissionToImport && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/purchase-invoice/importer"
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
            to="/audit-logs?entityNames=purchaseInvoice"
            startIcon={<HistoryIcon />}
            size="small"
          >
            {i18n('auditLog.menu')}
          </Button>
        )}

        {renderExportButton()}
      </Box>

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

export default PurchaseInvoiceToolbar;
