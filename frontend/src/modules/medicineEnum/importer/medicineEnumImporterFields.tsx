import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'medicineName',
    label: i18n('entities.medicineEnum.fields.medicineName'),
    schema: schemas.string(
      i18n('entities.medicineEnum.fields.medicineName'),
      {
        "required": true,
        "min": 5,
        "max": 100
      },
    ),
  },
  {
    name: 'keptInStock',
    label: i18n('entities.medicineEnum.fields.keptInStock'),
    schema: schemas.boolean(
      i18n('entities.medicineEnum.fields.keptInStock'),
      {},
    ),
  },
  {
    name: 'isCommon',
    label: i18n('entities.medicineEnum.fields.isCommon'),
    schema: schemas.boolean(
      i18n('entities.medicineEnum.fields.isCommon'),
      {},
    ),
  },
  {
    name: 'medicineCategory',
    label: i18n('entities.medicineEnum.fields.medicineCategory'),
    schema: schemas.relationToOne(
      i18n('entities.medicineEnum.fields.medicineCategory'),
      {},
    ),
  },
  {
    name: 'genericName',
    label: i18n('entities.medicineEnum.fields.genericName'),
    schema: schemas.string(
      i18n('entities.medicineEnum.fields.genericName'),
      {},
    ),
  },
  {
    name: 'compositionName',
    label: i18n('entities.medicineEnum.fields.compositionName'),
    schema: schemas.string(
      i18n('entities.medicineEnum.fields.compositionName'),
      {},
    ),
  },
  {
    name: 'msrp',
    label: i18n('entities.medicineEnum.fields.msrp'),
    schema: schemas.decimal(
      i18n('entities.medicineEnum.fields.msrp'),
      {
        "scale": 2
      },
    ),
  },
];