import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicineBatch/importer/medicineBatchImporterSelectors';
import MedicineBatchService from 'src/modules/medicineBatch/medicineBatchService';
import fields from 'src/modules/medicineBatch/importer/medicineBatchImporterFields';
import { i18n } from 'src/i18n';

const medicineBatchImporterActions = importerActions(
  'MEDICINEBATCH_IMPORTER',
  selectors,
  MedicineBatchService.import,
  fields,
  i18n('entities.medicineBatch.importer.fileName'),
);

export default medicineBatchImporterActions;