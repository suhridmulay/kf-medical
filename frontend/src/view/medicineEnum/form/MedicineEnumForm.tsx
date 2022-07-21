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
import medicineEnumEnumerators from 'src/modules/medicineEnum/medicineEnumEnumerators';
import MedicineCategoryEnumAutocompleteFormItem from 'src/view/medicineCategoryEnum/autocomplete/MedicineCategoryEnumAutocompleteFormItem';

const schema = yup.object().shape({
  medicineName: yupFormSchemas.string(
    i18n('entities.medicineEnum.fields.medicineName'),
    {
      "required": true,
      "min": 5,
      "max": 100
    },
  ),
  keptInStock: yupFormSchemas.boolean(
    i18n('entities.medicineEnum.fields.keptInStock'),
    {},
  ),
  isCommon: yupFormSchemas.boolean(
    i18n('entities.medicineEnum.fields.isCommon'),
    {},
  ),
  medicineCategory: yupFormSchemas.relationToOne(
    i18n('entities.medicineEnum.fields.medicineCategory'),
    {},
  ),
  genericName: yupFormSchemas.string(
    i18n('entities.medicineEnum.fields.genericName'),
    {},
  ),
  compositionName: yupFormSchemas.string(
    i18n('entities.medicineEnum.fields.compositionName'),
    {},
  ),
  msrp: yupFormSchemas.decimal(
    i18n('entities.medicineEnum.fields.msrp'),
    {
      "scale": 2
    },
  ),
  centralGST: yupFormSchemas.decimal(
    i18n('entities.medicineEnum.fields.centralGST'),
    {},
  ),
  stateGST: yupFormSchemas.decimal(
    i18n('entities.medicineEnum.fields.stateGST'),
    {},
  ),
  unit: yupFormSchemas.enumerator(
    i18n('entities.medicineEnum.fields.unit'),
    {
      "options": medicineEnumEnumerators.unit
    },
  ),
});

function MedicineEnumForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      medicineName: record.medicineName,
      keptInStock: record.keptInStock,
      isCommon: record.isCommon,
      medicineCategory: record.medicineCategory,
      genericName: record.genericName,
      compositionName: record.compositionName,
      msrp: record.msrp,
      centralGST: record.centralGST,
      stateGST: record.stateGST,
      unit: record.unit,
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
                name="medicineName"
                label={i18n('entities.medicineEnum.fields.medicineName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="keptInStock"
                label={i18n('entities.medicineEnum.fields.keptInStock')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="isCommon"
                label={i18n('entities.medicineEnum.fields.isCommon')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineCategoryEnumAutocompleteFormItem  
                name="medicineCategory"
                label={i18n('entities.medicineEnum.fields.medicineCategory')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="genericName"
                label={i18n('entities.medicineEnum.fields.genericName')}
              placeholder={i18n('entities.medicineEnum.placeholders.genericName')}
              hint={i18n('entities.medicineEnum.hints.genericName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="compositionName"
                label={i18n('entities.medicineEnum.fields.compositionName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="msrp"
                label={i18n('entities.medicineEnum.fields.msrp')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="centralGST"
                label={i18n('entities.medicineEnum.fields.centralGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="stateGST"
                label={i18n('entities.medicineEnum.fields.stateGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="unit"
                label={i18n('entities.medicineEnum.fields.unit')}
                options={medicineEnumEnumerators.unit.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.medicineEnum.enumerators.unit.${value}`,
                    ),
                  }),
                )}
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

export default MedicineEnumForm;
