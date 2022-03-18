import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'categoryName',
    label: i18n('entities.medicineCategoryEnum.fields.categoryName'),
    schema: schemas.string(
      i18n('entities.medicineCategoryEnum.fields.categoryName'),
      {
        "min": 3,
        "max": 128
      },
    ),
  },
];