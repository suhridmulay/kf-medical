import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseOrderEntryListFilter from 'src/view/purchaseOrderEntry/list/PurchaseOrderEntryListFilter';
import PurchaseOrderEntryListTable from 'src/view/purchaseOrderEntry/list/PurchaseOrderEntryListTable';
import PurchaseOrderEntryListToolbar from 'src/view/purchaseOrderEntry/list/PurchaseOrderEntryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseOrderEntryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseOrderEntry.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseOrderEntry.list.title')}
        </PageTitle>

        <PurchaseOrderEntryListToolbar />
        <PurchaseOrderEntryListFilter />
        <PurchaseOrderEntryListTable />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderEntryListPage;
