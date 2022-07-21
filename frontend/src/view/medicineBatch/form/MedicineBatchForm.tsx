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
import PurchaseInvoiceAutocompleteFormItem from 'src/view/purchaseInvoice/autocomplete/PurchaseInvoiceAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  invoice: yupFormSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.invoice'),
    {},
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.medicine'),
    {
      "required": true
    },
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.medicineBatch.fields.quantity'),
    {
      "required": true
    },
  ),
  batchNumber: yupFormSchemas.string(
    i18n('entities.medicineBatch.fields.batchNumber'),
    {
      "max": 100,
      "min": 2,
      "required": true
    },
  ),
  expiryDate: yupFormSchemas.date(
    i18n('entities.medicineBatch.fields.expiryDate'),
    {
      "required": true
    },
  ),
  unitPrice: yupFormSchemas.decimal(
    i18n('entities.medicineBatch.fields.unitPrice'),
    {
      "scale": 2
    },
  ),
  totalPrice: yupFormSchemas.decimal(
    i18n('entities.medicineBatch.fields.totalPrice'),
    {
      "scale": 2
    },
  ),
  stateGST: yupFormSchemas.decimal(
    i18n('entities.medicineBatch.fields.stateGST'),
    {
      "scale": 2
    },
  ),
  centralGST: yupFormSchemas.decimal(
    i18n('entities.medicineBatch.fields.centralGST'),
    {
      "scale": 2
    },
  ),
  msrp: yupFormSchemas.decimal(
    i18n('entities.medicineBatch.fields.msrp'),
    {
      "scale": 2
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.medicineBatch.fields.description'),
    {
      "max": 255
    },
  ),
  medicineBatchLookup: yupFormSchemas.string(
    i18n('entities.medicineBatch.fields.medicineBatchLookup'),
    {
      "max": 255,
      "min": 5
    },
  ),
});

function MedicineBatchForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      invoice: record.invoice,
      medicine: record.medicine,
      quantity: record.quantity,
      batchNumber: record.batchNumber,
      expiryDate: record.expiryDate ? moment(record.expiryDate, 'YYYY-MM-DD') : null,
      unitPrice: record.unitPrice,
      totalPrice: record.totalPrice,
      stateGST: record.stateGST,
      centralGST: record.centralGST,
      msrp: record.msrp,
      description: record.description,
      medicineBatchLookup: record.medicineBatchLookup,
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
              <PurchaseInvoiceAutocompleteFormItem  
                name="invoice"
                label={i18n('entities.medicineBatch.fields.invoice')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine"
                label={i18n('entities.medicineBatch.fields.medicine')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="quantity"
                label={i18n('entities.medicineBatch.fields.quantity')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="batchNumber"
                label={i18n('entities.medicineBatch.fields.batchNumber')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="expiryDate"
                label={i18n('entities.medicineBatch.fields.expiryDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="unitPrice"
                label={i18n('entities.medicineBatch.fields.unitPrice')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="totalPrice"
                label={i18n('entities.medicineBatch.fields.totalPrice')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="stateGST"
                label={i18n('entities.medicineBatch.fields.stateGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="centralGST"
                label={i18n('entities.medicineBatch.fields.centralGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="msrp"
                label={i18n('entities.medicineBatch.fields.msrp')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="description"
                label={i18n('entities.medicineBatch.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="medicineBatchLookup"
                label={i18n('entities.medicineBatch.fields.medicineBatchLookup')}
              hint={i18n('entities.medicineBatch.hints.medicineBatchLookup')}  
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

export default MedicineBatchForm;
