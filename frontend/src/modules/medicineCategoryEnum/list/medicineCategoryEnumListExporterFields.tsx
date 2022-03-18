import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineCategoryEnum.fields.id'),
  },
  {
    name: 'categoryName',
    label: i18n('entities.medicineCategoryEnum.fields.categoryName'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineCategoryEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineCategoryEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
