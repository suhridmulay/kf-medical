import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/visitTickets/importer/visitTicketsImporterActions';
import fields from 'src/modules/visitTickets/importer/visitTicketsImporterFields';
import selectors from 'src/modules/visitTickets/importer/visitTicketsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VisitTicketsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.visitTickets.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.visitTickets.menu'), '/visit-tickets'],
          [i18n('entities.visitTickets.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.visitTickets.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default VisitTicketsImportPage;
