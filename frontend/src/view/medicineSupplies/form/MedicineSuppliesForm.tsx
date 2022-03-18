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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.medicineSupplies.fields.medicine'),
    {
      "required": true
    },
  ),
  inventoryAddDate: yupFormSchemas.date(
    i18n('entities.medicineSupplies.fields.inventoryAddDate'),
    {
      "required": true
    },
  ),
  count: yupFormSchemas.integer(
    i18n('entities.medicineSupplies.fields.count'),
    {
      "required": true
    },
  ),
  batchNumber: yupFormSchemas.string(
    i18n('entities.medicineSupplies.fields.batchNumber'),
    {},
  ),
  expiryDate: yupFormSchemas.date(
    i18n('entities.medicineSupplies.fields.expiryDate'),
    {},
  ),
  rate: yupFormSchemas.decimal(
    i18n('entities.medicineSupplies.fields.rate'),
    {
      "scale": 2
    },
  ),
});

function MedicineSuppliesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      medicine: record.medicine,
      inventoryAddDate: record.inventoryAddDate ? moment(record.inventoryAddDate, 'YYYY-MM-DD') : null,
      count: record.count,
      batchNumber: record.batchNumber,
      expiryDate: record.expiryDate ? moment(record.expiryDate, 'YYYY-MM-DD') : null,
      rate: record.rate,
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
                label={i18n('entities.medicineSupplies.fields.medicine')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="inventoryAddDate"
                label={i18n('entities.medicineSupplies.fields.inventoryAddDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="count"
                label={i18n('entities.medicineSupplies.fields.count')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="batchNumber"
                label={i18n('entities.medicineSupplies.fields.batchNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="expiryDate"
                label={i18n('entities.medicineSupplies.fields.expiryDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="rate"
                label={i18n('entities.medicineSupplies.fields.rate')}  
                required={false}
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

export default MedicineSuppliesForm;
