import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.purchaseOrder.fields.id'),
  },
  {
    name: 'purchaseOrderNumber',
    label: i18n('entities.purchaseOrder.fields.purchaseOrderNumber'),
  },
  {
    name: 'vendor',
    label: i18n('entities.purchaseOrder.fields.vendor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'submittedDate',
    label: i18n('entities.purchaseOrder.fields.submittedDate'),
  },
  {
    name: 'sumEntriesCost',
    label: i18n('entities.purchaseOrder.fields.sumEntriesCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'submittedTotalCost',
    label: i18n('entities.purchaseOrder.fields.submittedTotalCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'entries',
    label: i18n('entities.purchaseOrder.fields.entries'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'invoices',
    label: i18n('entities.purchaseOrder.fields.invoices'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'notes',
    label: i18n('entities.purchaseOrder.fields.notes'),
  },
  {
    name: 'purchaseOrderLookup',
    label: i18n('entities.purchaseOrder.fields.purchaseOrderLookup'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.purchaseOrder.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.purchaseOrder.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
