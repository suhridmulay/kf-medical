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
import actions from 'src/modules/purchaseInvoice/list/purchaseInvoiceListActions';
import selectors from 'src/modules/purchaseInvoice/list/purchaseInvoiceListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PurchaseOrderAutocompleteFormItem from 'src/view/purchaseOrder/autocomplete/PurchaseOrderAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrder: yupFilterSchemas.relationToOne(
    i18n('entities.purchaseInvoice.fields.purchaseOrder'),
  ),
  invoiceNumber: yupFilterSchemas.string(
    i18n('entities.purchaseInvoice.fields.invoiceNumber'),
  ),
  invoiceAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseInvoice.fields.invoiceAmountRange'),
  ),
  invoiceTaxRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseInvoice.fields.invoiceTaxRange'),
  ),
  invoiceTotalRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseInvoice.fields.invoiceTotalRange'),
  ),
  invoiceDateRange: yupFilterSchemas.dateRange(
    i18n('entities.purchaseInvoice.fields.invoiceDateRange'),
  ),
  invoicePaidDateRange: yupFilterSchemas.dateRange(
    i18n('entities.purchaseInvoice.fields.invoicePaidDateRange'),
  ),
  paymentDetails: yupFilterSchemas.string(
    i18n('entities.purchaseInvoice.fields.paymentDetails'),
  ),
});

const emptyValues = {
  purchaseOrder: null,
  invoiceNumber: null,
  invoiceAmountRange: [],
  invoiceTaxRange: [],
  invoiceTotalRange: [],
  invoiceDateRange: [],
  invoicePaidDateRange: [],
  paymentDetails: null,
}

const previewRenders = {
  purchaseOrder: {
      label: i18n('entities.purchaseInvoice.fields.purchaseOrder'),
      render: filterRenders.relationToOne(),
    },
  invoiceNumber: {
    label: i18n('entities.purchaseInvoice.fields.invoiceNumber'),
    render: filterRenders.generic(),
  },
  invoiceAmountRange: {
    label: i18n('entities.purchaseInvoice.fields.invoiceAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  invoiceTaxRange: {
    label: i18n('entities.purchaseInvoice.fields.invoiceTaxRange'),
    render: filterRenders.decimalRange(2),
  },
  invoiceTotalRange: {
    label: i18n('entities.purchaseInvoice.fields.invoiceTotalRange'),
    render: filterRenders.decimalRange(2),
  },
  invoiceDateRange: {
    label: i18n('entities.purchaseInvoice.fields.invoiceDateRange'),
    render: filterRenders.dateRange(),
  },
  invoicePaidDateRange: {
    label: i18n('entities.purchaseInvoice.fields.invoicePaidDateRange'),
    render: filterRenders.dateRange(),
  },
  paymentDetails: {
    label: i18n('entities.purchaseInvoice.fields.paymentDetails'),
    render: filterRenders.generic(),
  },
}

function PurchaseInvoiceListFilter(props) {
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
                  <PurchaseOrderAutocompleteFormItem  
                    name="purchaseOrder"
                    label={i18n('entities.purchaseInvoice.fields.purchaseOrder')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="invoiceNumber"
                    label={i18n('entities.purchaseInvoice.fields.invoiceNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="invoiceAmountRange"
                    label={i18n('entities.purchaseInvoice.fields.invoiceAmountRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="invoiceTaxRange"
                    label={i18n('entities.purchaseInvoice.fields.invoiceTaxRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="invoiceTotalRange"
                    label={i18n('entities.purchaseInvoice.fields.invoiceTotalRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="invoiceDateRange"
                    label={i18n('entities.purchaseInvoice.fields.invoiceDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="invoicePaidDateRange"
                    label={i18n('entities.purchaseInvoice.fields.invoicePaidDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="paymentDetails"
                    label={i18n('entities.purchaseInvoice.fields.paymentDetails')}      
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

export default PurchaseInvoiceListFilter;