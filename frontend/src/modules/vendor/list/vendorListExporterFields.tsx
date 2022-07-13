import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.vendor.fields.id'),
  },
  {
    name: 'vendorName',
    label: i18n('entities.vendor.fields.vendorName'),
  },
  {
    name: 'address',
    label: i18n('entities.vendor.fields.address'),
  },
  {
    name: 'phone',
    label: i18n('entities.vendor.fields.phone'),
  },
  {
    name: 'fax',
    label: i18n('entities.vendor.fields.fax'),
  },
  {
    name: 'email',
    label: i18n('entities.vendor.fields.email'),
  },
  {
    name: 'gstNumber',
    label: i18n('entities.vendor.fields.gstNumber'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.vendor.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.vendor.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
