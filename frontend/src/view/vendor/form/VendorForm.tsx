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

const schema = yup.object().shape({
  vendorName: yupFormSchemas.string(
    i18n('entities.vendor.fields.vendorName'),
    {
      "required": true,
      "max": 255
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.vendor.fields.address'),
    {
      "required": true,
      "max": 255
    },
  ),
  phone: yupFormSchemas.string(
    i18n('entities.vendor.fields.phone'),
    {
      "required": true,
      "min": 10,
      "max": 20
    },
  ),
  fax: yupFormSchemas.string(
    i18n('entities.vendor.fields.fax'),
    {
      "min": 10,
      "max": 20
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.vendor.fields.email'),
    {
      "required": true,
      "max": 255
    },
  ),
  gstNumber: yupFormSchemas.string(
    i18n('entities.vendor.fields.gstNumber'),
    {
      "max": 255
    },
  ),
});

function VendorForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      vendorName: record.vendorName,
      address: record.address,
      phone: record.phone,
      fax: record.fax,
      email: record.email,
      gstNumber: record.gstNumber,
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
                name="vendorName"
                label={i18n('entities.vendor.fields.vendorName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address"
                label={i18n('entities.vendor.fields.address')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="phone"
                label={i18n('entities.vendor.fields.phone')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fax"
                label={i18n('entities.vendor.fields.fax')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="email"
                label={i18n('entities.vendor.fields.email')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="gstNumber"
                label={i18n('entities.vendor.fields.gstNumber')}  
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

export default VendorForm;
