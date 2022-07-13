import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vendor/view/vendorViewActions';
import selectors from 'src/modules/vendor/view/vendorViewSelectors';
import VendorView from 'src/view/vendor/view/VendorView';
import VendorViewToolbar from 'src/view/vendor/view/VendorViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VendorPage() {
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
          [i18n('entities.vendor.menu'), '/vendor'],
          [i18n('entities.vendor.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.vendor.view.title')}
        </PageTitle>

        <VendorViewToolbar match={match} />

        <VendorView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default VendorPage;
