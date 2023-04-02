import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
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
import { Delete } from '@mui/icons-material';

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

  console.log(initialValues);

  const [orders, setOrders] = useState<
    Partial<PurchaseOrder>[]
  >([
    Object.values(initialValues).filter((x) => !!x).length >
    0
      ? {
          medicine: initialValues.medicine.medicineName,
          quantity: initialValues.quantity,
          unit: initialValues.unit,
          unitCost: initialValues.unitCost,
          substitutionAllowed:
            initialValues.substitutionAllowed,
        }
      : {},
  ]);
  const medicines = useMedicines();

  const onSubmit = (values) => {
    console.log(values);
    for (let value of values) {
      value = { ...value, medicine: value.medicine.id };
      props.onSubmit(props.record?.id, value);
    }
  };

  const handleOrderAdd = () => {
    setOrders([...orders, { id: orders.length }]);
  };

  const handleOrdersUpdate = (
    idx: number,
    update: Partial<PurchaseOrder>,
  ) => {
    setOrders((oldOrders) =>
      oldOrders.map((order, i) => {
        if (i === idx) {
          return { ...order, ...update };
        }
        return order;
      }),
    );
  };

  const handleOrderDelete = (idx) => {
    setOrders((oldOrders) =>
      oldOrders.filter((_, i) => i !== idx),
    );
  };

  const { saveLoading, modal } = props;

  return (
    <Stack
      sx={{ width: '100%', height: '100%' }}
      spacing={2}
    >
      {medicines.state === 'resolved' ? (
        <>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleOrderAdd}
            >
              Add
            </Button>
            <Button
              variant="contained"
              onClick={() => onSubmit(orders)}
            >
              Submit
            </Button>
          </Stack>
          <Stack
            style={{ height: '100%' }}
            spacing={4}
            p={2}
          >
            {orders.map((order, i) => {
              // Fields are
              // medicine - autocomplete using
              // unit - select between 'tablet'/'strip' and 'bottle'
              // unit cost - integer
              // qty - integer
              // substitution allowed - checbkox
              return (
                <Box
                  sx={{
                    backgroundColor: '#f1f1f1',
                    width: '100%',
                    p: 2,
                    borderRadius: '0.5em',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Autocomplete
                        fullWidth
                        size="small"
                        options={medicines.payload}
                        value={order.medicine ?? null}
                        onChange={(e, v) =>
                          v
                            ? handleOrdersUpdate(i, {
                                medicine: v,
                              })
                            : handleOrdersUpdate(i, {
                                medicine: undefined,
                              })
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="medicine"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Select
                        fullWidth
                        size="small"
                        value={order.unit}
                        onChange={(e) =>
                          handleOrdersUpdate(i, {
                            unit: e.target.value,
                          })
                        }
                      >
                        {[
                          'Tablets',
                          'Strips',
                          'Bottle',
                          'Tube',
                          'Drop',
                        ].map((opt) => (
                          <MenuItem value={opt}>
                            {opt}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Unit Cost"
                        InputProps={{
                          type: 'number',
                          startAdornment: (
                            <Typography sx={{ pr: 1 }}>
                              Rs:{' '}
                            </Typography>
                          ),
                          endAdornment: (
                            <Typography sx={{ px: 1 }}>
                              {' '}
                              /unit{' '}
                            </Typography>
                          ),
                        }}
                        value={order.unitCost}
                        onChange={(e) =>
                          handleOrdersUpdate(i, {
                            unitCost: parseInt(
                              e.target.value,
                            ),
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        label="Quantity"
                        InputProps={{ type: 'number' }}
                        value={order.quantity}
                        onChange={(e) =>
                          handleOrdersUpdate(i, {
                            quantity: parseInt(
                              e.target.value,
                            ),
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControlLabel
                        control={<Checkbox />}
                        value={order.substitutionAllowed}
                        onChange={(e, checked) =>
                          handleOrdersUpdate(i, {
                            substitutionAllowed: checked,
                          })
                        }
                        label="Substitution allowed"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <IconButton
                        onClick={() => handleOrderDelete(i)}
                      >
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Stack>
        </>
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
}

export default PurchaseOrderEntryForm;
