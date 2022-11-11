import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patient/list/patientListActions';
import selectors from 'src/modules/patient/list/patientListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patientEnumerators from 'src/modules/patient/patientEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';

const schema = yup.object().shape({
  medicalCenter: yupFilterSchemas.relationToOne(
    i18n('entities.patient.fields.medicalCenter'),
  ),
  registrationNumber: yupFilterSchemas.string(
    i18n('entities.patient.fields.registrationNumber'),
  ),
  firstName: yupFilterSchemas.string(
    i18n('entities.patient.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.patient.fields.lastName'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.patient.fields.fullName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.patient.fields.gender'),
  ),
  localityName: yupFilterSchemas.string(
    i18n('entities.patient.fields.localityName'),
  ),
  mobileNumber: yupFilterSchemas.string(
    i18n('entities.patient.fields.mobileNumber'),
  ),
  aadharNumber: yupFilterSchemas.string(
    i18n('entities.patient.fields.aadharNumber'),
  ),
  dateOfBirthRange: yupFilterSchemas.dateRange(
    i18n('entities.patient.fields.dateOfBirthRange'),
  ),
});

const emptyValues = {
  medicalCenter: null,
  registrationNumber: null,
  firstName: null,
  lastName: null,
  fullName: null,
  gender: null,
  localityName: null,
  mobileNumber: null,
  aadharNumber: null,
  dateOfBirthRange: [],
}

const previewRenders = {
  medicalCenter: {
      label: i18n('entities.patient.fields.medicalCenter'),
      render: filterRenders.relationToOne(),
    },
  registrationNumber: {
    label: i18n('entities.patient.fields.registrationNumber'),
    render: filterRenders.generic(),
  },
  firstName: {
    label: i18n('entities.patient.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.patient.fields.lastName'),
    render: filterRenders.generic(),
  },
  fullName: {
    label: i18n('entities.patient.fields.fullName'),
    render: filterRenders.generic(),
  },
  gender: {
    label: i18n('entities.patient.fields.gender'),
    render: filterRenders.enumerator('entities.patient.enumerators.gender',),
  },
  localityName: {
    label: i18n('entities.patient.fields.localityName'),
    render: filterRenders.generic(),
  },
  mobileNumber: {
    label: i18n('entities.patient.fields.mobileNumber'),
    render: filterRenders.generic(),
  },
  aadharNumber: {
    label: i18n('entities.patient.fields.aadharNumber'),
    render: filterRenders.generic(),
  },
  dateOfBirthRange: {
    label: i18n('entities.patient.fields.dateOfBirthRange'),
    render: filterRenders.dateRange(),
  },
}

function PatientListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <HealthCenterAutocompleteFormItem  
                    name="medicalCenter"
                    label={i18n('entities.patient.fields.medicalCenter')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="registrationNumber"
                    label={i18n('entities.patient.fields.registrationNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="firstName"
                    label={i18n('entities.patient.fields.firstName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.patient.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.patient.fields.fullName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="gender"
                    label={i18n('entities.patient.fields.gender')}
                    options={patientEnumerators.gender.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.patient.enumerators.gender.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="localityName"
                    label={i18n('entities.patient.fields.localityName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="mobileNumber"
                    label={i18n('entities.patient.fields.mobileNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="aadharNumber"
                    label={i18n('entities.patient.fields.aadharNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dateOfBirthRange"
                    label={i18n('entities.patient.fields.dateOfBirthRange')}    
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default PatientListFilter;