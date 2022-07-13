import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineBatch/importer/medicineBatchImporterActions';
import fields from 'src/modules/medicineBatch/importer/medicineBatchImporterFields';
import selectors from 'src/modules/medicineBatch/importer/medicineBatchImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineBatchImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicineBatch.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineBatch.menu'), '/medicine-batch'],
          [i18n('entities.medicineBatch.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineBatch.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicineBatchImportPage;
