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
import actions from 'src/modules/medicineBatch/list/medicineBatchListActions';
import selectors from 'src/modules/medicineBatch/list/medicineBatchListSelectors';
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
import PurchaseInvoiceAutocompleteFormItem from 'src/view/purchaseInvoice/autocomplete/PurchaseInvoiceAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';
import VendorAutocompleteFormItem from 'src/view/vendor/autocomplete/VendorAutocompleteFormItem';

const schema = yup.object().shape({
  invoice: yupFilterSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.invoice'),
  ),
  medicine: yupFilterSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.medicine'),
  ),
  quantityRange: yupFilterSchemas.integerRange(
    i18n('entities.medicineBatch.fields.quantityRange'),
  ),
  batchNumber: yupFilterSchemas.string(
    i18n('entities.medicineBatch.fields.batchNumber'),
  ),
  expiryDateRange: yupFilterSchemas.dateRange(
    i18n('entities.medicineBatch.fields.expiryDateRange'),
  ),
  unitPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.medicineBatch.fields.unitPriceRange'),
  ),
  totalPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.medicineBatch.fields.totalPriceRange'),
  ),
  msrpRange: yupFilterSchemas.decimalRange(
    i18n('entities.medicineBatch.fields.msrpRange'),
  ),
  purchaseOrderNumberRange: yupFilterSchemas.integerRange(
    i18n('entities.medicineBatch.fields.purchaseOrderNumberRange'),
  ),
  vendor: yupFilterSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.vendor'),
  ),
  medicineBatchLookup: yupFilterSchemas.string(
    i18n('entities.medicineBatch.fields.medicineBatchLookup'),
  ),
});

const emptyValues = {
  invoice: null,
  medicine: null,
  quantityRange: [],
  batchNumber: null,
  expiryDateRange: [],
  unitPriceRange: [],
  totalPriceRange: [],
  msrpRange: [],
  purchaseOrderNumberRange: [],
  vendor: null,
  medicineBatchLookup: null,
}

const previewRenders = {
  invoice: {
      label: i18n('entities.medicineBatch.fields.invoice'),
      render: filterRenders.relationToOne(),
    },
  medicine: {
      label: i18n('entities.medicineBatch.fields.medicine'),
      render: filterRenders.relationToOne(),
    },
  quantityRange: {
    label: i18n('entities.medicineBatch.fields.quantityRange'),
    render: filterRenders.range(),
  },
  batchNumber: {
    label: i18n('entities.medicineBatch.fields.batchNumber'),
    render: filterRenders.generic(),
  },
  expiryDateRange: {
    label: i18n('entities.medicineBatch.fields.expiryDateRange'),
    render: filterRenders.dateRange(),
  },
  unitPriceRange: {
    label: i18n('entities.medicineBatch.fields.unitPriceRange'),
    render: filterRenders.decimalRange(2),
  },
  totalPriceRange: {
    label: i18n('entities.medicineBatch.fields.totalPriceRange'),
    render: filterRenders.decimalRange(2),
  },
  msrpRange: {
    label: i18n('entities.medicineBatch.fields.msrpRange'),
    render: filterRenders.decimalRange(2),
  },
  purchaseOrderNumberRange: {
    label: i18n('entities.medicineBatch.fields.purchaseOrderNumberRange'),
    render: filterRenders.range(),
  },
  vendor: {
      label: i18n('entities.medicineBatch.fields.vendor'),
      render: filterRenders.relationToOne(),
    },
  medicineBatchLookup: {
    label: i18n('entities.medicineBatch.fields.medicineBatchLookup'),
    render: filterRenders.generic(),
  },
}

function MedicineBatchListFilter(props) {
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
                  <PurchaseInvoiceAutocompleteFormItem  
                    name="invoice"
                    label={i18n('entities.medicineBatch.fields.invoice')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MedicineEnumAutocompleteFormItem  
                    name="medicine"
                    label={i18n('entities.medicineBatch.fields.medicine')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="quantityRange"
                    label={i18n('entities.medicineBatch.fields.quantityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="batchNumber"
                    label={i18n('entities.medicineBatch.fields.batchNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="expiryDateRange"
                    label={i18n('entities.medicineBatch.fields.expiryDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="unitPriceRange"
                    label={i18n('entities.medicineBatch.fields.unitPriceRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="totalPriceRange"
                    label={i18n('entities.medicineBatch.fields.totalPriceRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="msrpRange"
                    label={i18n('entities.medicineBatch.fields.msrpRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="purchaseOrderNumberRange"
                    label={i18n('entities.medicineBatch.fields.purchaseOrderNumberRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <VendorAutocompleteFormItem  
                    name="vendor"
                    label={i18n('entities.medicineBatch.fields.vendor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="medicineBatchLookup"
                    label={i18n('entities.medicineBatch.fields.medicineBatchLookup')}      
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

export default MedicineBatchListFilter;