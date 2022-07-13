import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PurchaseInvoiceViewItem from 'src/view/purchaseInvoice/view/PurchaseInvoiceViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';
import VendorViewItem from 'src/view/vendor/view/VendorViewItem';

function MedicineBatchView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PurchaseInvoiceViewItem
          label={i18n('entities.medicineBatch.fields.invoice')}
          value={record.invoice}
        />

        <MedicineEnumViewItem
          label={i18n('entities.medicineBatch.fields.medicine')}
          value={record.medicine}
        />

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.quantity')}
          value={record.quantity}
        />

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.batchNumber')}
          value={record.batchNumber}
        />

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.expiryDate')}
          value={record.expiryDate}
        />

        {record.unitPrice != null && <TextViewItem
          label={i18n('entities.medicineBatch.fields.unitPrice')}
          value={Number(record.unitPrice).toFixed(2)}
        />}

        {record.totalPrice != null && <TextViewItem
          label={i18n('entities.medicineBatch.fields.totalPrice')}
          value={Number(record.totalPrice).toFixed(2)}
        />}

        {record.msrp != null && <TextViewItem
          label={i18n('entities.medicineBatch.fields.msrp')}
          value={Number(record.msrp).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.purchaseOrderNumber')}
          value={record.purchaseOrderNumber}
        />

        <VendorViewItem
          label={i18n('entities.medicineBatch.fields.vendor')}
          value={record.vendor}
        />

        <TextViewItem
          label={i18n('entities.medicineBatch.fields.medicineBatchLookup')}
          value={record.medicineBatchLookup}
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

export default MedicineBatchView;
