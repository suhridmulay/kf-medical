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
import VendorAutocompleteFormItem from 'src/view/vendor/autocomplete/VendorAutocompleteFormItem';
import PurchaseOrderEntryAutocompleteFormItem from 'src/view/purchaseOrderEntry/autocomplete/PurchaseOrderEntryAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrderNumber: yupFormSchemas.integer(
    i18n('entities.purchaseOrder.fields.purchaseOrderNumber'),
    {},
  ),
  vendor: yupFormSchemas.relationToOne(
    i18n('entities.purchaseOrder.fields.vendor'),
    {},
  ),
  submittedDate: yupFormSchemas.date(
    i18n('entities.purchaseOrder.fields.submittedDate'),
    {},
  ),
  sumEntriesCost: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.sumEntriesCost'),
    {},
  ),
  entries: yupFormSchemas.relationToMany(
    i18n('entities.purchaseOrder.fields.entries'),
    {},
  ),
  invoices: yupFormSchemas.relationToMany(
    i18n('entities.purchaseOrder.fields.invoices'),
    {},
  ),
  purchaseOrderLookup: yupFormSchemas.string(
    i18n('entities.purchaseOrder.fields.purchaseOrderLookup'),
    {
      "max": 255,
      "min": 5
    },
  ),
  totalGST: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.totalGST'),
    {},
  ),
  freightAmount: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.freightAmount'),
    {},
  ),
  discount: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.discount'),
    {},
  ),
  writeOffAmount: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.writeOffAmount'),
    {},
  ),
  netAmount: yupFormSchemas.decimal(
    i18n('entities.purchaseOrder.fields.netAmount'),
    {},
  ),
  notes: yupFormSchemas.string(
    i18n('entities.purchaseOrder.fields.notes'),
    {
      "max": 255
    },
  ),
});

function PurchaseOrderForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      purchaseOrderNumber: record.purchaseOrderNumber,
      vendor: record.vendor,
      submittedDate: record.submittedDate ? moment(record.submittedDate, 'YYYY-MM-DD') : null,
      sumEntriesCost: record.sumEntriesCost,
      entries: record.entries || [],
      invoices: record.invoices || [],
      purchaseOrderLookup: record.purchaseOrderLookup,
      totalGST: record.totalGST,
      freightAmount: record.freightAmount,
      discount: record.discount,
      writeOffAmount: record.writeOffAmount,
      netAmount: record.netAmount,
      notes: record.notes,
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
              <InputNumberFormItem
                name="purchaseOrderNumber"
                label={i18n('entities.purchaseOrder.fields.purchaseOrderNumber')}
              hint={i18n('entities.purchaseOrder.hints.purchaseOrderNumber')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <VendorAutocompleteFormItem  
                name="vendor"
                label={i18n('entities.purchaseOrder.fields.vendor')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="submittedDate"
                label={i18n('entities.purchaseOrder.fields.submittedDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PurchaseOrderEntryAutocompleteFormItem  
                name="entries"
                label={i18n('entities.purchaseOrder.fields.entries')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="freightAmount"
                label={i18n('entities.purchaseOrder.fields.freightAmount')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="discount"
                label={i18n('entities.purchaseOrder.fields.discount')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="writeOffAmount"
                label={i18n('entities.purchaseOrder.fields.writeOffAmount')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="notes"
                label={i18n('entities.purchaseOrder.fields.notes')}  
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

export default PurchaseOrderForm;
