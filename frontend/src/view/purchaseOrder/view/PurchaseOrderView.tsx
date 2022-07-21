import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import VendorViewItem from 'src/view/vendor/view/VendorViewItem';
import PurchaseOrderEntryViewItem from 'src/view/purchaseOrderEntry/view/PurchaseOrderEntryViewItem';
import PurchaseInvoiceViewItem from 'src/view/purchaseInvoice/view/PurchaseInvoiceViewItem';

function PurchaseOrderView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.purchaseOrderNumber')}
          value={record.purchaseOrderNumber}
        />

        <VendorViewItem
          label={i18n('entities.purchaseOrder.fields.vendor')}
          value={record.vendor}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.submittedDate')}
          value={record.submittedDate}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.sumEntriesCost')}
          value={record.sumEntriesCost}
        />

        <PurchaseOrderEntryViewItem
          label={i18n('entities.purchaseOrder.fields.entries')}
          value={record.entries}
        />

        <PurchaseInvoiceViewItem
          label={i18n('entities.purchaseOrder.fields.invoices')}
          value={record.invoices}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.purchaseOrderLookup')}
          value={record.purchaseOrderLookup}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.totalGST')}
          value={record.totalGST}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.freightAmount')}
          value={record.freightAmount}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.discount')}
          value={record.discount}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.writeOffAmount')}
          value={record.writeOffAmount}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.netAmount')}
          value={record.netAmount}
        />

        <TextViewItem
          label={i18n('entities.purchaseOrder.fields.notes')}
          value={record.notes}
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

export default PurchaseOrderView;
