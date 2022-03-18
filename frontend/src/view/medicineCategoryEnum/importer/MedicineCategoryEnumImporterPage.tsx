import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterActions';
import fields from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterFields';
import selectors from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineCategoryEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicineCategoryEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineCategoryEnum.menu'), '/medicine-category-enum'],
          [i18n('entities.medicineCategoryEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineCategoryEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicineCategoryEnumImportPage;
