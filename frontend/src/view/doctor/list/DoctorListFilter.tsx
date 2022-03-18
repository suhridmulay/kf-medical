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
import actions from 'src/modules/doctor/list/doctorListActions';
import selectors from 'src/modules/doctor/list/doctorListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.doctor.fields.name'),
  ),
  specialization: yupFilterSchemas.string(
    i18n('entities.doctor.fields.specialization'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.doctor.fields.user'),
  ),
  phone: yupFilterSchemas.string(
    i18n('entities.doctor.fields.phone'),
  ),
  certifications: yupFilterSchemas.string(
    i18n('entities.doctor.fields.certifications'),
  ),
  registrationId: yupFilterSchemas.string(
    i18n('entities.doctor.fields.registrationId'),
  ),
  isRuralHealthcareProfessional: yupFilterSchemas.boolean(
    i18n('entities.doctor.fields.isRuralHealthcareProfessional'),
  ),
});

const emptyValues = {
  name: null,
  specialization: null,
  user: null,
  phone: null,
  certifications: null,
  registrationId: null,
  isRuralHealthcareProfessional: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.doctor.fields.name'),
    render: filterRenders.generic(),
  },
  specialization: {
    label: i18n('entities.doctor.fields.specialization'),
    render: filterRenders.generic(),
  },
  user: {
    label: i18n('entities.doctor.fields.user'),
    render: filterRenders.relationToOne(),
  },
  phone: {
    label: i18n('entities.doctor.fields.phone'),
    render: filterRenders.generic(),
  },
  certifications: {
    label: i18n('entities.doctor.fields.certifications'),
    render: filterRenders.generic(),
  },
  registrationId: {
    label: i18n('entities.doctor.fields.registrationId'),
    render: filterRenders.generic(),
  },
  isRuralHealthcareProfessional: {
    label: i18n('entities.doctor.fields.isRuralHealthcareProfessional'),
    render: filterRenders.boolean(),
  },
}

function DoctorListFilter(props) {
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
                  <InputFormItem
                    name="name"
                    label={i18n('entities.doctor.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="specialization"
                    label={i18n('entities.doctor.fields.specialization')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.doctor.fields.user')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="phone"
                    label={i18n('entities.doctor.fields.phone')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="certifications"
                    label={i18n('entities.doctor.fields.certifications')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="registrationId"
                    label={i18n('entities.doctor.fields.registrationId')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="isRuralHealthcareProfessional"
                    label={i18n('entities.doctor.fields.isRuralHealthcareProfessional')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
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

export default DoctorListFilter;