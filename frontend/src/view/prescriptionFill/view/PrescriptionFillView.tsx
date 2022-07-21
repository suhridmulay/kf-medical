import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PatientVisitViewItem from 'src/view/patientVisit/view/PatientVisitViewItem';
import MedicineBatchViewItem from 'src/view/medicineBatch/view/MedicineBatchViewItem';

function PrescriptionFillView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientVisitViewItem
          label={i18n('entities.prescriptionFill.fields.patientVisit')}
          value={record.patientVisit}
        />

        <MedicineBatchViewItem
          label={i18n('entities.prescriptionFill.fields.medicineBatch')}
          value={record.medicineBatch}
        />

        <TextViewItem
          label={i18n('entities.prescriptionFill.fields.quantity')}
          value={record.quantity}
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
