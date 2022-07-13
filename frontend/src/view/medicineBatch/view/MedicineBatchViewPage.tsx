import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineBatch/view/medicineBatchViewActions';
import selectors from 'src/modules/medicineBatch/view/medicineBatchViewSelectors';
import MedicineBatchView from 'src/view/medicineBatch/view/MedicineBatchView';
import MedicineBatchViewToolbar from 'src/view/medicineBatch/view/MedicineBatchViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineBatchPage() {
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
          [i18n('entities.medicineBatch.menu'), '/medicine-batch'],
          [i18n('entities.medicineBatch.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineBatch.view.title')}
        </PageTitle>

        <MedicineBatchViewToolbar match={match} />

        <MedicineBatchView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MedicineBatchPage;
