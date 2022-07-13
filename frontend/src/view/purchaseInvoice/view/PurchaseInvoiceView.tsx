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

        {record.invoiceAmount != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoiceAmount')}
          value={Number(record.invoiceAmount).toFixed(2)}
        />}

        {record.invoiceTax != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoiceTax')}
          value={Number(record.invoiceTax).toFixed(2)}
        />}

        {record.invoiceTotal != null && <TextViewItem
          label={i18n('entities.purchaseInvoice.fields.invoiceTotal')}
          value={Number(record.invoiceTotal).toFixed(2)}
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

        <MedicineBatchViewItem
          label={i18n('entities.purchaseInvoice.fields.batches')}
          value={record.batches}
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
