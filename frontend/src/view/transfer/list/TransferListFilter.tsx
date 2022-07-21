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
import actions from 'src/modules/transfer/list/transferListActions';
import selectors from 'src/modules/transfer/list/transferListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import MedicineBatchAutocompleteFormItem from 'src/view/medicineBatch/autocomplete/MedicineBatchAutocompleteFormItem';

const schema = yup.object().shape({
  fromCenter: yupFilterSchemas.relationToOne(
    i18n('entities.transfer.fields.fromCenter'),
  ),
  toCenter: yupFilterSchemas.relationToOne(
    i18n('entities.transfer.fields.toCenter'),
  ),
  medicineBatch: yupFilterSchemas.relationToOne(
    i18n('entities.transfer.fields.medicineBatch'),
  ),
  transferQuantityRange: yupFilterSchemas.integerRange(
    i18n('entities.transfer.fields.transferQuantityRange'),
  ),
  transferDateRange: yupFilterSchemas.dateRange(
    i18n('entities.transfer.fields.transferDateRange'),
  ),
});

const emptyValues = {
  fromCenter: null,
  toCenter: null,
  medicineBatch: null,
  transferQuantityRange: [],
  transferDateRange: [],
}

const previewRenders = {
  fromCenter: {
      label: i18n('entities.transfer.fields.fromCenter'),
      render: filterRenders.relationToOne(),
    },
  toCenter: {
      label: i18n('entities.transfer.fields.toCenter'),
      render: filterRenders.relationToOne(),
    },
  medicineBatch: {
      label: i18n('entities.transfer.fields.medicineBatch'),
      render: filterRenders.relationToOne(),
    },
  transferQuantityRange: {
    label: i18n('entities.transfer.fields.transferQuantityRange'),
    render: filterRenders.range(),
  },
  transferDateRange: {
    label: i18n('entities.transfer.fields.transferDateRange'),
    render: filterRenders.dateRange(),
  },
}

function TransferListFilter(props) {
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
                    name="fromCenter"
                    label={i18n('entities.transfer.fields.fromCenter')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <HealthCenterAutocompleteFormItem  
                    name="toCenter"
                    label={i18n('entities.transfer.fields.toCenter')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MedicineBatchAutocompleteFormItem  
                    name="medicineBatch"
                    label={i18n('entities.transfer.fields.medicineBatch')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="transferQuantityRange"
                    label={i18n('entities.transfer.fields.transferQuantityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="transferDateRange"
                    label={i18n('entities.transfer.fields.transferDateRange')}    
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

export default TransferListFilter;