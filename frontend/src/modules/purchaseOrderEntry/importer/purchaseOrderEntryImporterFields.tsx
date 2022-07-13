import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'purchaseOrder',
    label: i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
      {
        "required": true
      },
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
        "scale": 2,
        "required": true
      },
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
];