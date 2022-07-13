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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PurchaseOrderAutocompleteFormItem from 'src/view/purchaseOrder/autocomplete/PurchaseOrderAutocompleteFormItem';
import MedicineBatchAutocompleteFormItem from 'src/view/medicineBatch/autocomplete/MedicineBatchAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrder: yupFormSchemas.relationToOne(
    i18n('entities.purchaseInvoice.fields.purchaseOrder'),
    {},
  ),
  invoiceNumber: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.invoiceNumber'),
    {
      "required": true
    },
  ),
  invoiceAmount: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.invoiceAmount'),
    {
      "required": true,
      "scale": 2,
      "min": 0
    },
  ),
  invoiceTax: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.invoiceTax'),
    {
      "scale": 2
    },
  ),
  invoiceTotal: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.invoiceTotal'),
    {
      "required": true,
      "scale": 2
    },
  ),
  invoiceDate: yupFormSchemas.date(
    i18n('entities.purchaseInvoice.fields.invoiceDate'),
    {
      "required": true
    },
  ),
  invoicePaidDate: yupFormSchemas.date(
    i18n('entities.purchaseInvoice.fields.invoicePaidDate'),
    {},
  ),
  paymentDetails: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.paymentDetails'),
    {},
  ),
  batches: yupFormSchemas.relationToMany(
    i18n('entities.purchaseInvoice.fields.batches'),
    {},
  ),
});

function PurchaseInvoiceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      purchaseOrder: record.purchaseOrder,
      invoiceNumber: record.invoiceNumber,
      invoiceAmount: record.invoiceAmount,
      invoiceTax: record.invoiceTax,
      invoiceTotal: record.invoiceTotal,
      invoiceDate: record.invoiceDate ? moment(record.invoiceDate, 'YYYY-MM-DD') : null,
      invoicePaidDate: record.invoicePaidDate ? moment(record.invoicePaidDate, 'YYYY-MM-DD') : null,
      paymentDetails: record.paymentDetails,
      batches: record.batches || [],
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
              <PurchaseOrderAutocompleteFormItem  
                name="purchaseOrder"
                label={i18n('entities.purchaseInvoice.fields.purchaseOrder')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="invoiceNumber"
                label={i18n('entities.purchaseInvoice.fields.invoiceNumber')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="invoiceAmount"
                label={i18n('entities.purchaseInvoice.fields.invoiceAmount')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="invoiceTax"
                label={i18n('entities.purchaseInvoice.fields.invoiceTax')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="invoiceTotal"
                label={i18n('entities.purchaseInvoice.fields.invoiceTotal')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="invoiceDate"
                label={i18n('entities.purchaseInvoice.fields.invoiceDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="invoicePaidDate"
                label={i18n('entities.purchaseInvoice.fields.invoicePaidDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="paymentDetails"
                label={i18n('entities.purchaseInvoice.fields.paymentDetails')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineBatchAutocompleteFormItem  
                name="batches"
                label={i18n('entities.purchaseInvoice.fields.batches')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default PurchaseInvoiceForm;
