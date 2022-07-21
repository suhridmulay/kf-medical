import React from 'react';
import { i18n } from 'src/i18n';
import PrescriptionFillListFilter from 'src/view/prescriptionFill/list/PrescriptionFillListFilter';
import PrescriptionFillListTable from 'src/view/prescriptionFill/list/PrescriptionFillListTable';
import PrescriptionFillListToolbar from 'src/view/prescriptionFill/list/PrescriptionFillListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PrescriptionFillListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.prescriptionFill.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.prescriptionFill.list.title')}
        </PageTitle>

        <PrescriptionFillListToolbar />
        <PrescriptionFillListFilter />
        <PrescriptionFillListTable />
      </ContentWrapper>
    </>
  );
}

export default PrescriptionFillListPage;
