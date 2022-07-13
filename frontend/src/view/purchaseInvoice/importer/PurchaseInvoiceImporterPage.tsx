import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterActions';
import fields from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterFields';
import selectors from 'src/modules/purchaseInvoice/importer/purchaseInvoiceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseInvoiceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.purchaseInvoice.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseInvoice.menu'), '/purchase-invoice'],
          [i18n('entities.purchaseInvoice.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseInvoice.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PurchaseInvoiceImportPage;
