import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'vendorName',
    label: i18n('entities.vendor.fields.vendorName'),
    schema: schemas.string(
      i18n('entities.vendor.fields.vendorName'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.vendor.fields.address'),
    schema: schemas.string(
      i18n('entities.vendor.fields.address'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.vendor.fields.phone'),
    schema: schemas.string(
      i18n('entities.vendor.fields.phone'),
      {
        "required": true,
        "min": 10
      },
    ),
  },
  {
    name: 'email',
    label: i18n('entities.vendor.fields.email'),
    schema: schemas.string(
      i18n('entities.vendor.fields.email'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'gstNumber',
    label: i18n('entities.vendor.fields.gstNumber'),
    schema: schemas.string(
      i18n('entities.vendor.fields.gstNumber'),
      {},
    ),
  },
];