import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/siteInventory/view/siteInventoryViewActions';
import selectors from 'src/modules/siteInventory/view/siteInventoryViewSelectors';
import SiteInventoryView from 'src/view/siteInventory/view/SiteInventoryView';
import SiteInventoryViewToolbar from 'src/view/siteInventory/view/SiteInventoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SiteInventoryPage() {
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
          [i18n('entities.siteInventory.menu'), '/site-inventory'],
          [i18n('entities.siteInventory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.siteInventory.view.title')}
        </PageTitle>

        <SiteInventoryViewToolbar match={match} />

        <SiteInventoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SiteInventoryPage;
