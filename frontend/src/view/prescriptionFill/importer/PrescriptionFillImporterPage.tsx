import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/prescriptionFill/importer/prescriptionFillImporterActions';
import fields from 'src/modules/prescriptionFill/importer/prescriptionFillImporterFields';
import selectors from 'src/modules/prescriptionFill/importer/prescriptionFillImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PrescriptionFillImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.prescriptionFill.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.prescriptionFill.menu'), '/prescription-fill'],
          [i18n('entities.prescriptionFill.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.prescriptionFill.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PrescriptionFillImportPage;
