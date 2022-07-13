import React from 'react';
import { i18n } from 'src/i18n';
import VendorListFilter from 'src/view/vendor/list/VendorListFilter';
import VendorListTable from 'src/view/vendor/list/VendorListTable';
import VendorListToolbar from 'src/view/vendor/list/VendorListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VendorListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.vendor.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.vendor.list.title')}
        </PageTitle>

        <VendorListToolbar />
        <VendorListFilter />
        <VendorListTable />
      </ContentWrapper>
    </>
  );
}

export default VendorListPage;
