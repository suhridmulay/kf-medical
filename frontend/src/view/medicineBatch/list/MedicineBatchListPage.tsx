import React from 'react';
import { i18n } from 'src/i18n';
import MedicineBatchListFilter from 'src/view/medicineBatch/list/MedicineBatchListFilter';
import MedicineBatchListTable from 'src/view/medicineBatch/list/MedicineBatchListTable';
import MedicineBatchListToolbar from 'src/view/medicineBatch/list/MedicineBatchListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineBatchListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineBatch.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineBatch.list.title')}
        </PageTitle>

        <MedicineBatchListToolbar />
        <MedicineBatchListFilter />
        <MedicineBatchListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicineBatchListPage;
