import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PatientVisitViewItem from 'src/view/patientVisit/view/PatientVisitViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';
import SiteInventoryViewItem from 'src/view/siteInventory/view/SiteInventoryViewItem';

function PrescriptionFillView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientVisitViewItem
          label={i18n('entities.prescriptionFill.fields.patientVisit')}
          value={record.patientVisit}
        />

        <MedicineEnumViewItem
          label={i18n('entities.prescriptionFill.fields.medicine')}
          value={record.medicine}
        />

        <TextViewItem
          label={i18n('entities.prescriptionFill.fields.quantity')}
          value={record.quantity}
        />

        <SiteInventoryViewItem
          label={i18n('entities.prescriptionFill.fields.siteInventory')}
          value={record.siteInventory}
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

export default PrescriptionFillView;
