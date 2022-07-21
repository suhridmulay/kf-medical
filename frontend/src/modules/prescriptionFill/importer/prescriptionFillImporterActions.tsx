import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/prescriptionFill/importer/prescriptionFillImporterSelectors';
import PrescriptionFillService from 'src/modules/prescriptionFill/prescriptionFillService';
import fields from 'src/modules/prescriptionFill/importer/prescriptionFillImporterFields';
import { i18n } from 'src/i18n';

const prescriptionFillImporterActions = importerActions(
  'PRESCRIPTIONFILL_IMPORTER',
  selectors,
  PrescriptionFillService.import,
  fields,
  i18n('entities.prescriptionFill.importer.fileName'),
);

export default prescriptionFillImporterActions;