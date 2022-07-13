import React from 'react';
import { i18n } from 'src/i18n';
import PurchaseOrderListFilter from 'src/view/purchaseOrder/list/PurchaseOrderListFilter';
import PurchaseOrderListTable from 'src/view/purchaseOrder/list/PurchaseOrderListTable';
import PurchaseOrderListToolbar from 'src/view/purchaseOrder/list/PurchaseOrderListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseOrderListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseOrder.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseOrder.list.title')}
        </PageTitle>

        <PurchaseOrderListToolbar />
        <PurchaseOrderListFilter />
        <PurchaseOrderListTable />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderListPage;
