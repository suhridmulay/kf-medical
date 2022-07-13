import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/siteInventory/importer/siteInventoryImporterSelectors';
import SiteInventoryService from 'src/modules/siteInventory/siteInventoryService';
import fields from 'src/modules/siteInventory/importer/siteInventoryImporterFields';
import { i18n } from 'src/i18n';

const siteInventoryImporterActions = importerActions(
  'SITEINVENTORY_IMPORTER',
  selectors,
  SiteInventoryService.import,
  fields,
  i18n('entities.siteInventory.importer.fileName'),
);

export default siteInventoryImporterActions;