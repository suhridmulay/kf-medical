import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/siteInventory/importer/siteInventoryImporterActions';
import fields from 'src/modules/siteInventory/importer/siteInventoryImporterFields';
import selectors from 'src/modules/siteInventory/importer/siteInventoryImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SiteInventoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.siteInventory.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.siteInventory.menu'), '/site-inventory'],
          [i18n('entities.siteInventory.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.siteInventory.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SiteInventoryImportPage;
