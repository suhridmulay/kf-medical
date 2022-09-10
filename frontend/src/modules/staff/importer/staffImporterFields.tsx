import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.staff.fields.name'),
    schema: schemas.string(
      i18n('entities.staff.fields.name'),
      {
        "required": true,
        "max": 100,
        "min": 5
      },
    ),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.staff.fields.mobileNumber'),
    schema: schemas.string(
      i18n('entities.staff.fields.mobileNumber'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'user',
    label: i18n('entities.staff.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.staff.fields.user'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'center',
    label: i18n('entities.staff.fields.center'),
    schema: schemas.relationToOne(
      i18n('entities.staff.fields.center'),
      {
        "required": true
      },
    ),
  },
];