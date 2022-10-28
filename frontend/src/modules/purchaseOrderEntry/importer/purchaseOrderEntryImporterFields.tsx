import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import purchaseOrderEntryEnumerators from 'src/modules/purchaseOrderEntry/purchaseOrderEntryEnumerators';

export default [
  {
    name: 'purchaseOrder',
    label: i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
      {},
    ),
  },
  {
    name: 'medicine',
    label: i18n('entities.purchaseOrderEntry.fields.medicine'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseOrderEntry.fields.medicine'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.purchaseOrderEntry.fields.quantity'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrderEntry.fields.quantity'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'unit',
    label: i18n('entities.purchaseOrderEntry.fields.unit'),
    schema: schemas.enumerator(
      i18n('entities.purchaseOrderEntry.fields.unit'),
      {
        "options": purchaseOrderEntryEnumerators.unit
      },
    ),
  },
  {
    name: 'unitCost',
    label: i18n('entities.purchaseOrderEntry.fields.unitCost'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrderEntry.fields.unitCost'),
      {
        "required": true,
        "scale": 2
      },
    ),
  },
  {
    name: 'totalCost',
    label: i18n('entities.purchaseOrderEntry.fields.totalCost'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrderEntry.fields.totalCost'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'stateGST',
    label: i18n('entities.purchaseOrderEntry.fields.stateGST'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrderEntry.fields.stateGST'),
      {},
    ),
  },
  {
    name: 'centralGST',
    label: i18n('entities.purchaseOrderEntry.fields.centralGST'),
    schema: schemas.decimal(
      i18n('entities.purchaseOrderEntry.fields.centralGST'),
      {},
    ),
  },
  {
    name: 'substitutionAllowed',
    label: i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
    schema: schemas.boolean(
      i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
      {},
    ),
  },
  {
    name: 'purchaseOrderEntryLookup',
    label: i18n('entities.purchaseOrderEntry.fields.purchaseOrderEntryLookup'),
    schema: schemas.string(
      i18n('entities.purchaseOrderEntry.fields.purchaseOrderEntryLookup'),
      {
        "max": 255
      },
    ),
  },
];