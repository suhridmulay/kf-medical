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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import transferEnumerators from 'src/modules/transfer/transferEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import MedicineBatchAutocompleteFormItem from 'src/view/medicineBatch/autocomplete/MedicineBatchAutocompleteFormItem';

const schema = yup.object().shape({
  fromCenter: yupFormSchemas.relationToOne(
    i18n('entities.transfer.fields.fromCenter'),
    {
      "required": true
    },
  ),
  toCenter: yupFormSchemas.relationToOne(
    i18n('entities.transfer.fields.toCenter'),
    {
      "required": true
    },
  ),
  medicineBatch: yupFormSchemas.relationToOne(
    i18n('entities.transfer.fields.medicineBatch'),
    {
      "required": true
    },
  ),
  transferQuantity: yupFormSchemas.integer(
    i18n('entities.transfer.fields.transferQuantity'),
    {
      "required": true
    },
  ),
  unit: yupFormSchemas.enumerator(
    i18n('entities.transfer.fields.unit'),
    {
      "options": transferEnumerators.unit
    },
  ),
  transferDate: yupFormSchemas.date(
    i18n('entities.transfer.fields.transferDate'),
    {},
  ),
});

function TransferForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      fromCenter: record.fromCenter,
      toCenter: record.toCenter,
      medicineBatch: record.medicineBatch,
      transferQuantity: record.transferQuantity,
      unit: record.unit,
      transferDate: record.transferDate ? moment(record.transferDate, 'YYYY-MM-DD') : null,
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
              <HealthCenterAutocompleteFormItem  
                name="fromCenter"
                label={i18n('entities.transfer.fields.fromCenter')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HealthCenterAutocompleteFormItem  
                name="toCenter"
                label={i18n('entities.transfer.fields.toCenter')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineBatchAutocompleteFormItem  
                name="medicineBatch"
                label={i18n('entities.transfer.fields.medicineBatch')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="transferQuantity"
                label={i18n('entities.transfer.fields.transferQuantity')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="unit"
                label={i18n('entities.transfer.fields.unit')}
                options={transferEnumerators.unit.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.transfer.enumerators.unit.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="transferDate"
                label={i18n('entities.transfer.fields.transferDate')}
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

export default TransferForm;
