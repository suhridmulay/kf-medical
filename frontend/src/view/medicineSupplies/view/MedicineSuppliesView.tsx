import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';

function MedicineSuppliesView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <MedicineEnumViewItem
          label={i18n('entities.medicineSupplies.fields.medicine')}
          value={record.medicine}
        />

        <TextViewItem
          label={i18n('entities.medicineSupplies.fields.inventoryAddDate')}
          value={record.inventoryAddDate}
        />

        <TextViewItem
          label={i18n('entities.medicineSupplies.fields.count')}
          value={record.count}
        />

        <TextViewItem
          label={i18n('entities.medicineSupplies.fields.batchNumber')}
          value={record.batchNumber}
        />

        <TextViewItem
          label={i18n('entities.medicineSupplies.fields.expiryDate')}
          value={record.expiryDate}
        />

        {record.rate != null && <TextViewItem
          label={i18n('entities.medicineSupplies.fields.rate')}
          value={Number(record.rate).toFixed(2)}
        />}        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default MedicineSuppliesView;
