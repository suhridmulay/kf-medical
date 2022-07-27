import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchaseOrder/view/purchaseOrderViewActions';
import selectors from 'src/modules/purchaseOrder/view/purchaseOrderViewSelectors';
import PurchaseOrderPrintView from 'src/view/purchaseOrder/view/PurchaseOrderPrintView';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PurchaseOrderPrintPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doPrint(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.purchaseOrder.menu'), '/purchase-order'],
          [i18n('entities.purchaseOrder.view.title')],
        ]}
      />
      <ContentWrapper>
        <PurchaseOrderPrintView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PurchaseOrderPrintPage;
