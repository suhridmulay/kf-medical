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
import actions from 'src/modules/visitTickets/list/visitTicketsListActions';
import selectors from 'src/modules/visitTickets/list/visitTicketsListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import visitTicketsEnumerators from 'src/modules/visitTickets/visitTicketsEnumerators';
import PatientVisitAutocompleteFormItem from 'src/view/patientVisit/autocomplete/PatientVisitAutocompleteFormItem';

const schema = yup.object().shape({
  patientVisit: yupFilterSchemas.relationToOne(
    i18n('entities.visitTickets.fields.patientVisit'),
  ),
  department: yupFilterSchemas.enumerator(
    i18n('entities.visitTickets.fields.department'),
  ),
  ticketCountRange: yupFilterSchemas.integerRange(
    i18n('entities.visitTickets.fields.ticketCountRange'),
  ),
});

const emptyValues = {
  patientVisit: null,
  department: null,
  ticketCountRange: [],
}

const previewRenders = {
  patientVisit: {
      label: i18n('entities.visitTickets.fields.patientVisit'),
      render: filterRenders.relationToOne(),
    },
  department: {
    label: i18n('entities.visitTickets.fields.department'),
    render: filterRenders.enumerator('entities.visitTickets.enumerators.department',),
  },
  ticketCountRange: {
    label: i18n('entities.visitTickets.fields.ticketCountRange'),
    render: filterRenders.range(),
  },
}

function VisitTicketsListFilter(props) {
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
                  <PatientVisitAutocompleteFormItem  
                    name="patientVisit"
                    label={i18n('entities.visitTickets.fields.patientVisit')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="department"
                    label={i18n('entities.visitTickets.fields.department')}
                    options={visitTicketsEnumerators.department.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.visitTickets.enumerators.department.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="ticketCountRange"
                    label={i18n('entities.visitTickets.fields.ticketCountRange')}      
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

export default VisitTicketsListFilter;