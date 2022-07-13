import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vendor/importer/vendorImporterActions';
import fields from 'src/modules/vendor/importer/vendorImporterFields';
import selectors from 'src/modules/vendor/importer/vendorImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VendorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.vendor.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.vendor.menu'), '/vendor'],
          [i18n('entities.vendor.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.vendor.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default VendorImportPage;
