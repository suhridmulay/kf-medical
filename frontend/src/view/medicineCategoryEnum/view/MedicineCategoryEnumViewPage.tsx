import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineCategoryEnum/view/medicineCategoryEnumViewActions';
import selectors from 'src/modules/medicineCategoryEnum/view/medicineCategoryEnumViewSelectors';
import MedicineCategoryEnumView from 'src/view/medicineCategoryEnum/view/MedicineCategoryEnumView';
import MedicineCategoryEnumViewToolbar from 'src/view/medicineCategoryEnum/view/MedicineCategoryEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineCategoryEnumPage() {
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
          [i18n('entities.medicineCategoryEnum.menu'), '/medicine-category-enum'],
          [i18n('entities.medicineCategoryEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineCategoryEnum.view.title')}
        </PageTitle>

        <MedicineCategoryEnumViewToolbar match={match} />

        <MedicineCategoryEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MedicineCategoryEnumPage;
