import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';

function DoctorView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HealthCenterViewItem
          label={i18n('entities.doctor.fields.medicalCenter')}
          value={record.medicalCenter}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.specialization')}
          value={record.specialization}
        />

        <UserViewItem
          label={i18n('entities.doctor.fields.user')}
          value={record.user}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.phone')}
          value={record.phone}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.certifications')}
          value={record.certifications}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.registrationId')}
          value={record.registrationId}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.isRuralHealthcareProfessional')}
          value={
            record.isRuralHealthcareProfessional
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

export default DoctorView;
