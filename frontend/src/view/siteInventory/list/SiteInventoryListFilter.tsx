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
import actions from 'src/modules/siteInventory/list/siteInventoryListActions';
import selectors from 'src/modules/siteInventory/list/siteInventoryListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import MedicineBatchAutocompleteFormItem from 'src/view/medicineBatch/autocomplete/MedicineBatchAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  center: yupFilterSchemas.relationToOne(
    i18n('entities.siteInventory.fields.center'),
  ),
  batchNumber: yupFilterSchemas.relationToOne(
    i18n('entities.siteInventory.fields.batchNumber'),
  ),
  medicine: yupFilterSchemas.relationToOne(
    i18n('entities.siteInventory.fields.medicine'),
  ),
  inventoryAddDateRange: yupFilterSchemas.dateRange(
    i18n('entities.siteInventory.fields.inventoryAddDateRange'),
  ),
  expiryDateRange: yupFilterSchemas.dateRange(
    i18n('entities.siteInventory.fields.expiryDateRange'),
  ),
});

const emptyValues = {
  center: null,
  batchNumber: null,
  medicine: null,
  inventoryAddDateRange: [],
  expiryDateRange: [],
}

const previewRenders = {
  center: {
      label: i18n('entities.siteInventory.fields.center'),
      render: filterRenders.relationToOne(),
    },
  batchNumber: {
      label: i18n('entities.siteInventory.fields.batchNumber'),
      render: filterRenders.relationToOne(),
    },
  medicine: {
      label: i18n('entities.siteInventory.fields.medicine'),
      render: filterRenders.relationToOne(),
    },
  inventoryAddDateRange: {
    label: i18n('entities.siteInventory.fields.inventoryAddDateRange'),
    render: filterRenders.dateRange(),
  },
  expiryDateRange: {
    label: i18n('entities.siteInventory.fields.expiryDateRange'),
    render: filterRenders.dateRange(),
  },
}

function SiteInventoryListFilter(props) {
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
                    name="center"
                    label={i18n('entities.siteInventory.fields.center')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MedicineBatchAutocompleteFormItem  
                    name="batchNumber"
                    label={i18n('entities.siteInventory.fields.batchNumber')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MedicineEnumAutocompleteFormItem  
                    name="medicine"
                    label={i18n('entities.siteInventory.fields.medicine')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="inventoryAddDateRange"
                    label={i18n('entities.siteInventory.fields.inventoryAddDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="expiryDateRange"
                    label={i18n('entities.siteInventory.fields.expiryDateRange')}    
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

export default SiteInventoryListFilter;