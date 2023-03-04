import {
  Box,
  Button,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import purchaseOrderEntryEnumerators from 'src/modules/purchaseOrderEntry/purchaseOrderEntryEnumerators';
import PurchaseOrderAutocompleteFormItem from 'src/view/purchaseOrder/autocomplete/PurchaseOrderAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';
import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';
import {
  DataGrid,
  GridColDef,
  renderEditSingleSelectCell,
} from '@mui/x-data-grid';
import { MenuItem, Select, Stack } from '@mui/material';
import { Add } from '@material-ui/icons';
import { Medicine, PromiseTracker } from 'src/types';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

const schema = yup.object().shape({
  purchaseOrder: yupFormSchemas.relationToOne(
    i18n(
      'entities.purchaseOrderEntry.fields.purchaseOrder',
    ),
    {},
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.purchaseOrderEntry.fields.medicine'),
    {
      required: true,
    },
  ),
  quantity: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.quantity'),
    {
      required: true,
      scale: 2,
    },
  ),
  unit: yupFormSchemas.enumerator(
    i18n('entities.purchaseOrderEntry.fields.unit'),
    {
      options: purchaseOrderEntryEnumerators.unit,
    },
  ),
  unitCost: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.unitCost'),
    {
      required: true,
      scale: 2,
    },
  ),
  totalCost: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.totalCost'),
    {
      scale: 2,
    },
  ),
  stateGST: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.stateGST'),
    {},
  ),
  centralGST: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.centralGST'),
    {},
  ),
  substitutionAllowed: yupFormSchemas.boolean(
    i18n(
      'entities.purchaseOrderEntry.fields.substitutionAllowed',
    ),
    {},
  ),
  purchaseOrderEntryLookup: yupFormSchemas.string(
    i18n(
      'entities.purchaseOrderEntry.fields.purchaseOrderEntryLookup',
    ),
    {
      max: 255,
    },
  ),
});

interface PurchaseOrder {
  id: number;
  purchaseOrder: string;
  medicine: string;
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
  stateGST: number;
  centralGST: number;
  substitutionAllowed: boolean;
  purchaseOrderEntryLookup: string;
}

const useMedicines = () => {
  const [meds, setMeds] = useState<PromiseTracker<any>>({
    state: 'pending',
  });
  useEffect(() => {
    MedicineEnumService.listAutocomplete(null, null).then(
      (res) => setMeds({ state: 'resolved', payload: res }),
    );
  }, []);
  return meds;
};

function PurchaseOrderEntryForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      purchaseOrder: record.purchaseOrder,
      medicine: record.medicine,
      quantity: record.quantity,
      unit: record.unit,
      unitCost: record.unitCost,
      totalCost: record.totalCost,
      stateGST: record.stateGST,
      centralGST: record.centralGST,
      substitutionAllowed: record.substitutionAllowed,
      purchaseOrderEntryLookup:
        record.purchaseOrderEntryLookup,
    };
  });

  const [orders, setOrders] = useState<
    Partial<PurchaseOrder>[]
  >([]);
  const medicines = useMedicines();

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    /**
     * {
     *   "substitutionAllowed": false,
     *   "unitCost": 1,
     *   "unit": "Tablets",
     *   "quantity": 100,
     *   "medicine": "66106524-908b-44e0-bae9-5c14f62bcd6e"
     * }
     */
    console.log(values);
    for (let value of values) {
      props.onSubmit(props.record?.id, value);
    }
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const handleOrderAdd = () => {
    setOrders([...orders, { id: orders.length }]);
  };

  const handleRowUpdate = ({ row, values }) => {
    orders[row.id] = { ...orders[row.id], ...values };
    setOrders([...orders]);
  };

  const { saveLoading, modal } = props;

  const coldefs: MRT_ColumnDef[] = useMemo(
    () => [
      {
        id: 'id',
        header: 'Serial Number',
        accessorKey: 'id',
        enableEditing: false,
      },
      {
        id: 'medicine',
        header: 'Medicine',
        accessorKey: 'medicine',
        Cell: ({row, cell}) => {
          return (medicines.state === 'resolved' ? medicines.payload : []).find(med => med.id === cell.getValue())?.label;
        },
        editVariant: 'select' as const,
        editSelectOptions:
          medicines.state === 'resolved'
            ? medicines.payload.map((m) => ({value: m.id, text: m.label}))
            : [],
      },
      {
        id: 'unit',
        header: 'Unit',
        accessorKey: 'unit',
        editVariant: 'select' as const,
        editSelectOptions: ['Tablets', 'Strips', 'Bottles']
      },
      {
        id: 'unitCost',
        header: 'Unit Cost',
        accessorKey: 'unitCost',
      },
      {
        id: 'quantity',
        header: 'Quantity',
        accessorKey: 'quantity',
      },
      {
        id: 'substitute',
        header: 'Substitution Allowed',
        accessorKey: 'substitutionAllowed',
        editVariant: 'select',
        editSelectOptions: [{value: true, text: 'yes'}, {value: false, text: 'no'}]
      },
    ],
    [medicines],
  );

  return (
    <Stack sx={{ width: '100%', height: '100%' }} gap="1em">
      {medicines.state === 'resolved' ? (
        <>
          <Stack direction="row">
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleOrderAdd}
            >
              Add
            </Button>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => onSubmit(orders)}
            >
              Submit
            </Button>
          </Stack>
          <Stack style={{ height: '100%' }}>
            <MaterialReactTable
              columns={coldefs}
              data={orders}
              enableRowActions
              enableEditing
              editingMode="row"
              muiTableBodyCellEditTextFieldProps={{
                variant: 'outlined',
              }}
              onEditingRowSave={handleRowUpdate}
            />
          </Stack>
        </>
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
}

export default PurchaseOrderEntryForm;
