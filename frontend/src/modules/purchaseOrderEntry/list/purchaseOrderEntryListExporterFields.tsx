import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.purchaseOrderEntry.fields.id'),
  },
  {
    name: 'purchaseOrder',
    label: i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicine',
    label: i18n('entities.purchaseOrderEntry.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'quantity',
    label: i18n('entities.purchaseOrderEntry.fields.quantity'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'unit',
    label: i18n('entities.purchaseOrderEntry.fields.unit'),
  },
  {
    name: 'unitCost',
    label: i18n('entities.purchaseOrderEntry.fields.unitCost'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'totalCost',
    label: i18n('entities.purchaseOrderEntry.fields.totalCost'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'stateGST',
    label: i18n('entities.purchaseOrderEntry.fields.stateGST'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'centralGST',
    label: i18n('entities.purchaseOrderEntry.fields.centralGST'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'substitutionAllowed',
    label: i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.purchaseOrderEntry.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.purchaseOrderEntry.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
