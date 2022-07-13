import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseOrder/importer/purchaseOrderImporterActions';
import fields from 'src/modules/purchaseOrder/importer/purchaseOrderImporterFields';
import selectors from 'src/modules/purchaseOrder/importer/purchaseOrderImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseOrderImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.purchaseOrder.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseOrder.menu'), '/purchase-order'],
          [i18n('entities.purchaseOrder.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseOrder.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderImportPage;
