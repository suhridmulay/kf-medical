import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PurchaseOrderViewItem from 'src/view/purchaseOrder/view/PurchaseOrderViewItem';
import MedicineBatchViewItem from 'src/view/medicineBatch/view/MedicineBatchViewItem';

function PurchaseInvoiceView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PurchaseOrderViewItem
          label={i18n('entities.purchaseInvoice.fields.purchaseOrder')}
          value={record.purchaseOrder}
        />

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoiceNumber')}
          value={record.invoiceNumber}
        />

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.referenceNumber')}
          value={record.referenceNumber}
        />

        <MedicineBatchViewItem
          label={i18n('entities.purchaseInvoice.fields.batches')}
          value={record.batches}
        />

        {record.grossAmount != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.grossAmount')}
          value={Number(record.grossAmount).toFixed(2)}
        />}

        {record.stateGST != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.stateGST')}
          value={Number(record.stateGST).toFixed(2)}
        />}

        {record.centralGST != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.centralGST')}
          value={Number(record.centralGST).toFixed(2)}
        />}

        {record.grandTotal != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.grandTotal')}
          value={Number(record.grandTotal).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoiceDate')}
          value={record.invoiceDate}
        />

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoicePaidDate')}
          value={record.invoicePaidDate}
        />

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.paymentDetails')}
          value={record.paymentDetails}
        />

        <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.inventoryAddDate')}
          value={record.inventoryAddDate}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default PurchaseInvoiceView;
