import React from 'react';
import { i18n } from 'src/i18n';
import VisitTicketsListFilter from 'src/view/visitTickets/list/VisitTicketsListFilter';
import VisitTicketsListTable from 'src/view/visitTickets/list/VisitTicketsListTable';
import VisitTicketsListToolbar from 'src/view/visitTickets/list/VisitTicketsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VisitTicketsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.visitTickets.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.visitTickets.list.title')}
        </PageTitle>

        <VisitTicketsListToolbar />
        <VisitTicketsListFilter />
        <VisitTicketsListTable />
      </ContentWrapper>
    </>
  );
}

export default VisitTicketsListPage;
