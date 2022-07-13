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
import actions from 'src/modules/purchaseOrder/list/purchaseOrderListActions';
import selectors from 'src/modules/purchaseOrder/list/purchaseOrderListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import VendorAutocompleteFormItem from 'src/view/vendor/autocomplete/VendorAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrderNumberRange: yupFilterSchemas.integerRange(
    i18n('entities.purchaseOrder.fields.purchaseOrderNumberRange'),
  ),
  vendor: yupFilterSchemas.relationToOne(
    i18n('entities.purchaseOrder.fields.vendor'),
  ),
  submittedDateRange: yupFilterSchemas.dateRange(
    i18n('entities.purchaseOrder.fields.submittedDateRange'),
  ),
  sumEntriesCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseOrder.fields.sumEntriesCostRange'),
  ),
  submittedTotalCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseOrder.fields.submittedTotalCostRange'),
  ),
  notes: yupFilterSchemas.string(
    i18n('entities.purchaseOrder.fields.notes'),
  ),
});

const emptyValues = {
  purchaseOrderNumberRange: [],
  vendor: null,
  submittedDateRange: [],
  sumEntriesCostRange: [],
  submittedTotalCostRange: [],
  notes: null,
}

const previewRenders = {
  purchaseOrderNumberRange: {
    label: i18n('entities.purchaseOrder.fields.purchaseOrderNumberRange'),
    render: filterRenders.range(),
  },
  vendor: {
      label: i18n('entities.purchaseOrder.fields.vendor'),
      render: filterRenders.relationToOne(),
    },
  submittedDateRange: {
    label: i18n('entities.purchaseOrder.fields.submittedDateRange'),
    render: filterRenders.dateRange(),
  },
  sumEntriesCostRange: {
    label: i18n('entities.purchaseOrder.fields.sumEntriesCostRange'),
    render: filterRenders.decimalRange(),
  },
  submittedTotalCostRange: {
    label: i18n('entities.purchaseOrder.fields.submittedTotalCostRange'),
    render: filterRenders.decimalRange(),
  },
  notes: {
    label: i18n('entities.purchaseOrder.fields.notes'),
    render: filterRenders.generic(),
  },
}

function PurchaseOrderListFilter(props) {
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
                  <InputNumberRangeFormItem
                    name="purchaseOrderNumberRange"
                    label={i18n('entities.purchaseOrder.fields.purchaseOrderNumberRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <VendorAutocompleteFormItem  
                    name="vendor"
                    label={i18n('entities.purchaseOrder.fields.vendor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="submittedDateRange"
                    label={i18n('entities.purchaseOrder.fields.submittedDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="sumEntriesCostRange"
                    label={i18n('entities.purchaseOrder.fields.sumEntriesCostRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="submittedTotalCostRange"
                    label={i18n('entities.purchaseOrder.fields.submittedTotalCostRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="notes"
                    label={i18n('entities.purchaseOrder.fields.notes')}      
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

export default PurchaseOrderListFilter;