import React from 'react';
import { i18n } from 'src/i18n';
import SiteInventoryListFilter from 'src/view/siteInventory/list/SiteInventoryListFilter';
import SiteInventoryListTable from 'src/view/siteInventory/list/SiteInventoryListTable';
import SiteInventoryListToolbar from 'src/view/siteInventory/list/SiteInventoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SiteInventoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.siteInventory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.siteInventory.list.title')}
        </PageTitle>

        <SiteInventoryListToolbar />
        <SiteInventoryListFilter />
        <SiteInventoryListTable />
      </ContentWrapper>
    </>
  );
}

export default SiteInventoryListPage;
