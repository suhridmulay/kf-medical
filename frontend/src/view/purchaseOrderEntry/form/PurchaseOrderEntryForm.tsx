import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
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

const schema = yup.object().shape({
  purchaseOrder: yupFormSchemas.relationToOne(
    i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
    {},
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.purchaseOrderEntry.fields.medicine'),
    {
      "required": true
    },
  ),
  quantity: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.quantity'),
    {
      "required": true,
      "scale": 2
    },
  ),
  unit: yupFormSchemas.enumerator(
    i18n('entities.purchaseOrderEntry.fields.unit'),
    {
      "options": purchaseOrderEntryEnumerators.unit
    },
  ),
  unitCost: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.unitCost'),
    {
      "required": true,
      "scale": 2
    },
  ),
  totalCost: yupFormSchemas.decimal(
    i18n('entities.purchaseOrderEntry.fields.totalCost'),
    {
      "scale": 2
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
    i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
    {},
  ),
  purchaseOrderEntryLookup: yupFormSchemas.string(
    i18n('entities.purchaseOrderEntry.fields.purchaseOrderEntryLookup'),
    {
      "max": 255
    },
  ),
});

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
      purchaseOrderEntryLookup: record.purchaseOrderEntryLookup,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine"
                label={i18n('entities.purchaseOrderEntry.fields.medicine')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="quantity"
                label={i18n('entities.purchaseOrderEntry.fields.quantity')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="unit"
                label={i18n('entities.purchaseOrderEntry.fields.unit')}
                options={purchaseOrderEntryEnumerators.unit.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.purchaseOrderEntry.enumerators.unit.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="unitCost"
                label={i18n('entities.purchaseOrderEntry.fields.unitCost')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="substitutionAllowed"
                label={i18n('entities.purchaseOrderEntry.fields.substitutionAllowed')}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PurchaseOrderEntryForm;
