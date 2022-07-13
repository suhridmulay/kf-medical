import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterActions';
import fields from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterFields';
import selectors from 'src/modules/purchaseOrderEntry/importer/purchaseOrderEntryImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseOrderEntryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.purchaseOrderEntry.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseOrderEntry.menu'), '/purchase-order-entry'],
          [i18n('entities.purchaseOrderEntry.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseOrderEntry.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderEntryImportPage;
