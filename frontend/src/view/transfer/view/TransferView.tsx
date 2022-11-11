import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';
import MedicineBatchViewItem from 'src/view/medicineBatch/view/MedicineBatchViewItem';

function TransferView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HealthCenterViewItem
          label={i18n('entities.transfer.fields.fromCenter')}
          value={record.fromCenter}
        />

        <HealthCenterViewItem
          label={i18n('entities.transfer.fields.toCenter')}
          value={record.toCenter}
        />

        <MedicineBatchViewItem
          label={i18n('entities.transfer.fields.medicineBatch')}
          value={record.medicineBatch}
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.transferQuantity')}
          value={record.transferQuantity}
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.unit')}
          value={
            record.unit &&
            i18n(
              `entities.transfer.enumerators.unit.${record.unit}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.transfer.fields.transferDate')}
          value={record.transferDate}
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

export default TransferView;
