import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PatientVisitViewItem from 'src/view/patientVisit/view/PatientVisitViewItem';

function VisitTicketsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientVisitViewItem
          label={i18n('entities.visitTickets.fields.patientVisit')}
          value={record.patientVisit}
        />

        <TextViewItem
          label={i18n('entities.visitTickets.fields.department')}
          value={
            record.department &&
            i18n(
              `entities.visitTickets.enumerators.department.${record.department}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.visitTickets.fields.ticketCount')}
          value={record.ticketCount}
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

export default VisitTicketsView;
