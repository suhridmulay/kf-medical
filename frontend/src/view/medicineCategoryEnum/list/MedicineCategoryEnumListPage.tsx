import React from 'react';
import { i18n } from 'src/i18n';
import MedicineCategoryEnumListFilter from 'src/view/medicineCategoryEnum/list/MedicineCategoryEnumListFilter';
import MedicineCategoryEnumListTable from 'src/view/medicineCategoryEnum/list/MedicineCategoryEnumListTable';
import MedicineCategoryEnumListToolbar from 'src/view/medicineCategoryEnum/list/MedicineCategoryEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineCategoryEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineCategoryEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineCategoryEnum.list.title')}
        </PageTitle>

        <MedicineCategoryEnumListToolbar />
        <MedicineCategoryEnumListFilter />
        <MedicineCategoryEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicineCategoryEnumListPage;
