import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import PurchaseInvoiceForm from 'src/view/purchaseInvoice/form/PurchaseInvoiceForm';
import PurchaseInvoiceService from 'src/modules/purchaseInvoice/purchaseInvoiceService';
import Errors from 'src/modules/shared/error/errors';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function PurchaseInvoiceFormModal(props) {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    console.log("Coming here with " + JSON.stringify(data));
    try {
      setSaveLoading(true);
      const { id } = await PurchaseInvoiceService.create(data);
      const record = await PurchaseInvoiceService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const doClose = () => {
    return props.onClose();
  };

  return ReactDOM.createPortal(
    <Dialog
      open={true}
      onClose={doClose}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        disableTypography
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>
          {i18n('entities.purchaseInvoice.new.title')}
        </h2>
        <IconButton onClick={doClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <PurchaseInvoiceForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={doClose}
          modal
        />
      </DialogContent>
    </Dialog>,
    (document as any).getElementById('modal-root'),
  );
}

export default PurchaseInvoiceFormModal;
