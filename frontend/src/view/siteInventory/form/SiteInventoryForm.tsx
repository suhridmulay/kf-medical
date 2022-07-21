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
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import MedicineBatchAutocompleteFormItem from 'src/view/medicineBatch/autocomplete/MedicineBatchAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  siteBatchIdentifier: yupFormSchemas.string(
    i18n('entities.siteInventory.fields.siteBatchIdentifier'),
    {
      "max": 255
    },
  ),
  center: yupFormSchemas.relationToOne(
    i18n('entities.siteInventory.fields.center'),
    {},
  ),
  batchNumber: yupFormSchemas.relationToOne(
    i18n('entities.siteInventory.fields.batchNumber'),
    {},
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.siteInventory.fields.medicine'),
    {},
  ),
  inventoryAddDate: yupFormSchemas.date(
    i18n('entities.siteInventory.fields.inventoryAddDate'),
    {},
  ),
  expiryDate: yupFormSchemas.date(
    i18n('entities.siteInventory.fields.expiryDate'),
    {},
  ),
  initialCount: yupFormSchemas.integer(
    i18n('entities.siteInventory.fields.initialCount'),
    {},
  ),
  currentCount: yupFormSchemas.integer(
    i18n('entities.siteInventory.fields.currentCount'),
    {},
  ),
});

function SiteInventoryForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      siteBatchIdentifier: record.siteBatchIdentifier,
      center: record.center,
      batchNumber: record.batchNumber,
      medicine: record.medicine,
      inventoryAddDate: record.inventoryAddDate ? moment(record.inventoryAddDate, 'YYYY-MM-DD') : null,
      expiryDate: record.expiryDate ? moment(record.expiryDate, 'YYYY-MM-DD') : null,
      initialCount: record.initialCount,
      currentCount: record.currentCount,
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
              <InputFormItem
                name="siteBatchIdentifier"
                label={i18n('entities.siteInventory.fields.siteBatchIdentifier')}
              hint={i18n('entities.siteInventory.hints.siteBatchIdentifier')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HealthCenterAutocompleteFormItem  
                name="center"
                label={i18n('entities.siteInventory.fields.center')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineBatchAutocompleteFormItem  
                name="batchNumber"
                label={i18n('entities.siteInventory.fields.batchNumber')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine"
                label={i18n('entities.siteInventory.fields.medicine')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="inventoryAddDate"
                label={i18n('entities.siteInventory.fields.inventoryAddDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="expiryDate"
                label={i18n('entities.siteInventory.fields.expiryDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="initialCount"
                label={i18n('entities.siteInventory.fields.initialCount')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="currentCount"
                label={i18n('entities.siteInventory.fields.currentCount')}  
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

export default SiteInventoryForm;
