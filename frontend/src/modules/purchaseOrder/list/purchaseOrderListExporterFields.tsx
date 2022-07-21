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
    name: 'purchaseOrderLookup',
    label: i18n('entities.purchaseOrder.fields.purchaseOrderLookup'),
  },
  {
    name: 'totalGST',
    label: i18n('entities.purchaseOrder.fields.totalGST'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'freightAmount',
    label: i18n('entities.purchaseOrder.fields.freightAmount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'discount',
    label: i18n('entities.purchaseOrder.fields.discount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'writeOffAmount',
    label: i18n('entities.purchaseOrder.fields.writeOffAmount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'netAmount',
    label: i18n('entities.purchaseOrder.fields.netAmount'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'notes',
    label: i18n('entities.purchaseOrder.fields.notes'),
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
