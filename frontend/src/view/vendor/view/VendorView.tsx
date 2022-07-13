import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function VendorView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.vendor.fields.vendorName')}
          value={record.vendorName}
        />

        <TextViewItem
          label={i18n('entities.vendor.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.vendor.fields.phone')}
          value={record.phone}
        />

        <TextViewItem
          label={i18n('entities.vendor.fields.email')}
          value={record.email}
        />

        <TextViewItem
          label={i18n('entities.vendor.fields.gstNumber')}
          value={record.gstNumber}
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

export default VendorView;
