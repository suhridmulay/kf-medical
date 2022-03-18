import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterSelectors';
import MedicineCategoryEnumService from 'src/modules/medicineCategoryEnum/medicineCategoryEnumService';
import fields from 'src/modules/medicineCategoryEnum/importer/medicineCategoryEnumImporterFields';
import { i18n } from 'src/i18n';

const medicineCategoryEnumImporterActions = importerActions(
  'MEDICINECATEGORYENUM_IMPORTER',
  selectors,
  MedicineCategoryEnumService.import,
  fields,
  i18n('entities.medicineCategoryEnum.importer.fileName'),
);

export default medicineCategoryEnumImporterActions;