import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseInvoiceListFilter from 'src/view/purchaseInvoice/list/PurchaseInvoiceListFilter';
import PurchaseInvoiceListTable from 'src/view/purchaseInvoice/list/PurchaseInvoiceListTable';
import PurchaseInvoiceListToolbar from 'src/view/purchaseInvoice/list/PurchaseInvoiceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseInvoiceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseInvoice.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseInvoice.list.title')}
        </PageTitle>

        <PurchaseInvoiceListToolbar />
        <PurchaseInvoiceListFilter />
        <PurchaseInvoiceListTable />
      </ContentWrapper>
    </>
  );
}

export default PurchaseInvoiceListPage;
