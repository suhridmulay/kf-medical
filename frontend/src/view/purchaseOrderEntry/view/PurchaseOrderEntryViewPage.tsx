import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseOrderEntry/view/purchaseOrderEntryViewActions';
import selectors from 'src/modules/purchaseOrderEntry/view/purchaseOrderEntryViewSelectors';
import PurchaseOrderEntryView from 'src/view/purchaseOrderEntry/view/PurchaseOrderEntryView';
import PurchaseOrderEntryViewToolbar from 'src/view/purchaseOrderEntry/view/PurchaseOrderEntryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PurchaseOrderEntryPage() {
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
          [i18n('entities.purchaseOrderEntry.menu'), '/purchase-order-entry'],
          [i18n('entities.purchaseOrderEntry.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.purchaseOrderEntry.view.title')}
        </PageTitle>

        <PurchaseOrderEntryViewToolbar match={match} />

        <PurchaseOrderEntryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderEntryPage;
