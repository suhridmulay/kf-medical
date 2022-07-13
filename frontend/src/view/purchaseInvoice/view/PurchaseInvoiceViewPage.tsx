import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseInvoice/view/purchaseInvoiceViewActions';
import selectors from 'src/modules/purchaseInvoice/view/purchaseInvoiceViewSelectors';
import PurchaseInvoiceView from 'src/view/purchaseInvoice/view/PurchaseInvoiceView';
import PurchaseInvoiceViewToolbar from 'src/view/purchaseInvoice/view/PurchaseInvoiceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseInvoicePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseInvoice.menu'), '/purchase-invoice'],
          [i18n('entities.purchaseInvoice.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseInvoice.view.title')}
        </PageTitle>

        <PurchaseInvoiceViewToolbar match={match} />

        <PurchaseInvoiceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PurchaseInvoicePage;
