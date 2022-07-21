import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/prescriptionFill/view/prescriptionFillViewActions';
import selectors from 'src/modules/prescriptionFill/view/prescriptionFillViewSelectors';
import PrescriptionFillView from 'src/view/prescriptionFill/view/PrescriptionFillView';
import PrescriptionFillViewToolbar from 'src/view/prescriptionFill/view/PrescriptionFillViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PrescriptionFillPage() {
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
          [i18n('entities.prescriptionFill.menu'), '/prescription-fill'],
          [i18n('entities.prescriptionFill.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.prescriptionFill.view.title')}
        </PageTitle>

        <PrescriptionFillViewToolbar match={match} />

        <PrescriptionFillView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PrescriptionFillPage;
