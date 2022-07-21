import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.healthCenter.fields.name'),
    schema: schemas.string(
      i18n('entities.healthCenter.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.healthCenter.fields.address'),
    schema: schemas.string(
      i18n('entities.healthCenter.fields.address'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.healthCenter.fields.phoneNumber'),
    schema: schemas.string(
      i18n('entities.healthCenter.fields.phoneNumber'),
      {},
    ),
  },
  {
    name: 'warehouseLicenceNumber',
    label: i18n('entities.healthCenter.fields.warehouseLicenceNumber'),
    schema: schemas.string(
      i18n('entities.healthCenter.fields.warehouseLicenceNumber'),
      {
        "max": 255
      },
    ),
  },
  {
    name: 'isHeadoffice',
    label: i18n('entities.healthCenter.fields.isHeadoffice'),
    schema: schemas.boolean(
      i18n('entities.healthCenter.fields.isHeadoffice'),
      {},
    ),
  },
  {
    name: 'adminName',
    label: i18n('entities.healthCenter.fields.adminName'),
    schema: schemas.relationToOne(
      i18n('entities.healthCenter.fields.adminName'),
      {},
    ),
  },
];