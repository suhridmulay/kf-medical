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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import medicineBatchEnumerators from 'src/modules/medicineBatch/medicineBatchEnumerators';
import PurchaseInvoiceAutocompleteFormItem from 'src/view/purchaseInvoice/autocomplete/PurchaseInvoiceAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  invoice: yupFilterSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.invoice'),
  ),
  medicine: yupFilterSchemas.relationToOne(
    i18n('entities.medicineBatch.fields.medicine'),
  ),
  unit: yupFilterSchemas.enumerator(
    i18n('entities.medicineBatch.fields.unit'),
  ),
  qtyInStrips: yupFilterSchemas.boolean(
    i18n('entities.medicineBatch.fields.qtyInStrips'),
  ),
  medicineBatchLookup: yupFilterSchemas.string(
    i18n('entities.medicineBatch.fields.medicineBatchLookup'),
  ),
});

const emptyValues = {
  invoice: null,
  medicine: null,
  unit: null,
  qtyInStrips: null,
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
  unit: {
    label: i18n('entities.medicineBatch.fields.unit'),
    render: filterRenders.enumerator('entities.medicineBatch.enumerators.unit',),
  },
  qtyInStrips: {
    label: i18n('entities.medicineBatch.fields.qtyInStrips'),
    render: filterRenders.boolean(),
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
                  <SelectFormItem
                    name="unit"
                    label={i18n('entities.medicineBatch.fields.unit')}
                    options={medicineBatchEnumerators.unit.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.medicineBatch.enumerators.unit.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="qtyInStrips"
                    label={i18n('entities.medicineBatch.fields.qtyInStrips')}
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