import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.staff.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.staff.fields.name'),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.staff.fields.mobileNumber'),
  },
  {
    name: 'user',
    label: i18n('entities.staff.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'center',
    label: i18n('entities.staff.fields.center'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.staff.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.staff.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
