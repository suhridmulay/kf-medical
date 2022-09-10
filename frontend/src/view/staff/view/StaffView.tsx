import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';

function StaffView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.staff.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.staff.fields.mobileNumber')}
          value={record.mobileNumber}
        />

        <UserViewItem
          label={i18n('entities.staff.fields.user')}
          value={record.user}
        />

        <HealthCenterViewItem
          label={i18n('entities.staff.fields.center')}
          value={record.center}
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

export default StaffView;
