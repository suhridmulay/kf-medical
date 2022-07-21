import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';
import MedicineBatchViewItem from 'src/view/medicineBatch/view/MedicineBatchViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';

function SiteInventoryView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.siteInventory.fields.siteBatchIdentifier')}
          value={record.siteBatchIdentifier}
        />

        <HealthCenterViewItem
          label={i18n('entities.siteInventory.fields.center')}
          value={record.center}
        />

        <MedicineBatchViewItem
          label={i18n('entities.siteInventory.fields.batchNumber')}
          value={record.batchNumber}
        />

        <MedicineEnumViewItem
          label={i18n('entities.siteInventory.fields.medicine')}
          value={record.medicine}
        />

        <TextViewItem
          label={i18n('entities.siteInventory.fields.inventoryAddDate')}
          value={record.inventoryAddDate}
        />

        <TextViewItem
          label={i18n('entities.siteInventory.fields.expiryDate')}
          value={record.expiryDate}
        />

        <TextViewItem
          label={i18n('entities.siteInventory.fields.initialCount')}
          value={record.initialCount}
        />

        <TextViewItem
          label={i18n('entities.siteInventory.fields.currentCount')}
          value={record.currentCount}
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

export default SiteInventoryView;
