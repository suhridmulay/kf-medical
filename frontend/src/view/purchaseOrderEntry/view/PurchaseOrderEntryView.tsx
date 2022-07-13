import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PurchaseOrderViewItem from 'src/view/purchaseOrder/view/PurchaseOrderViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';

function PurchaseOrderEntryView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PurchaseOrderViewItem
          label={i18n('entities.purchaseOrderEntry.fields.purchaseOrder')}
          value={record.purchaseOrder}
        />

        <MedicineEnumViewItem
          label={i18n('entities.purchaseOrderEntry.fields.medicine')}
          value={record.medicine}
        />

        {record.quantity != null && <TextViewItem
          label={i18n('entities.purchaseOrderEntry.fields.quantity')}
          value={Number(record.quantity).toFixed(2)}
        />}

        {record.unitCost != null && <TextViewItem
          label={i18n('entities.purchaseOrderEntry.fields.unitCost')}
          value={Number(record.unitCost).toFixed(2)}
        />}

        {record.totalCost != null && <TextViewItem
          label={i18n('entities.purchaseOrderEntry.fields.totalCost')}
          value={Number(record.totalCost).toFixed(2)}
        />}

        <TextViewItem
          label={i18n('entities.purchaseOrderEntry.fields.substitutionAllowed')}
          value={
            record.substitutionAllowed
              ? i18n('common.yes')
              : i18n('common.no')
          }
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

export default PurchaseOrderEntryView;
