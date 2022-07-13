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
import actions from 'src/modules/purchaseOrderEntry/list/purchaseOrderEntryListActions';
import selectors from 'src/modules/purchaseOrderEntry/list/purchaseOrderEntryListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import PurchaseOrderAutocompleteFormItem from 'src/view/purchaseOrder/autocomplete/PurchaseOrderAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrder: yupFilterSchemas.relationToOne(
    i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
  ),
  medicine: yupFilterSchemas.relationToOne(
    i18n('entities.purchaseOrderEntry.fields.medicine'),
  ),
  quantityRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseOrderEntry.fields.quantityRange'),
  ),
  unitCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseOrderEntry.fields.unitCostRange'),
  ),
  totalCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchaseOrderEntry.fields.totalCostRange'),
  ),
  substitutionAllowed: yupFilterSchemas.boolean(
    i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
  ),
});

const emptyValues = {
  purchaseOrder: null,
  medicine: null,
  quantityRange: [],
  unitCostRange: [],
  totalCostRange: [],
  substitutionAllowed: null,
}

const previewRenders = {
  purchaseOrder: {
      label: i18n('entities.purchaseOrderEntry.fields.purchaseOrder'),
      render: filterRenders.relationToOne(),
    },
  medicine: {
      label: i18n('entities.purchaseOrderEntry.fields.medicine'),
      render: filterRenders.relationToOne(),
    },
  quantityRange: {
    label: i18n('entities.purchaseOrderEntry.fields.quantityRange'),
    render: filterRenders.decimalRange(2),
  },
  unitCostRange: {
    label: i18n('entities.purchaseOrderEntry.fields.unitCostRange'),
    render: filterRenders.decimalRange(2),
  },
  totalCostRange: {
    label: i18n('entities.purchaseOrderEntry.fields.totalCostRange'),
    render: filterRenders.decimalRange(2),
  },
  substitutionAllowed: {
    label: i18n('entities.purchaseOrderEntry.fields.substitutionAllowed'),
    render: filterRenders.boolean(),
  },
}

function PurchaseOrderEntryListFilter(props) {
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
                    label={i18n('entities.purchaseOrderEntry.fields.purchaseOrder')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MedicineEnumAutocompleteFormItem  
                    name="medicine"
                    label={i18n('entities.purchaseOrderEntry.fields.medicine')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="quantityRange"
                    label={i18n('entities.purchaseOrderEntry.fields.quantityRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="unitCostRange"
                    label={i18n('entities.purchaseOrderEntry.fields.unitCostRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="totalCostRange"
                    label={i18n('entities.purchaseOrderEntry.fields.totalCostRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="substitutionAllowed"
                    label={i18n('entities.purchaseOrderEntry.fields.substitutionAllowed')}
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

export default PurchaseOrderEntryListFilter;