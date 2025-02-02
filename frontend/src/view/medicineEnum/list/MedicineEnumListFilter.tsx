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
import actions from 'src/modules/medicineEnum/list/medicineEnumListActions';
import selectors from 'src/modules/medicineEnum/list/medicineEnumListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import medicineEnumEnumerators from 'src/modules/medicineEnum/medicineEnumEnumerators';
import MedicineCategoryEnumAutocompleteFormItem from 'src/view/medicineCategoryEnum/autocomplete/MedicineCategoryEnumAutocompleteFormItem';

const schema = yup.object().shape({
  medicineName: yupFilterSchemas.string(
    i18n('entities.medicineEnum.fields.medicineName'),
  ),
  keptInStock: yupFilterSchemas.boolean(
    i18n('entities.medicineEnum.fields.keptInStock'),
  ),
  isCommon: yupFilterSchemas.boolean(
    i18n('entities.medicineEnum.fields.isCommon'),
  ),
  medicineCategory: yupFilterSchemas.relationToOne(
    i18n('entities.medicineEnum.fields.medicineCategory'),
  ),
  genericName: yupFilterSchemas.string(
    i18n('entities.medicineEnum.fields.genericName'),
  ),
  compositionName: yupFilterSchemas.string(
    i18n('entities.medicineEnum.fields.compositionName'),
  ),
  msrpRange: yupFilterSchemas.decimalRange(
    i18n('entities.medicineEnum.fields.msrpRange'),
  ),
  unit: yupFilterSchemas.enumerator(
    i18n('entities.medicineEnum.fields.unit'),
  ),
  tabletsPerStripRange: yupFilterSchemas.integerRange(
    i18n('entities.medicineEnum.fields.tabletsPerStripRange'),
  ),
});

const emptyValues = {
  medicineName: null,
  keptInStock: null,
  isCommon: null,
  medicineCategory: null,
  genericName: null,
  compositionName: null,
  msrpRange: [],
  unit: null,
  tabletsPerStripRange: [],
}

const previewRenders = {
  medicineName: {
    label: i18n('entities.medicineEnum.fields.medicineName'),
    render: filterRenders.generic(),
  },
  keptInStock: {
    label: i18n('entities.medicineEnum.fields.keptInStock'),
    render: filterRenders.boolean(),
  },
  isCommon: {
    label: i18n('entities.medicineEnum.fields.isCommon'),
    render: filterRenders.boolean(),
  },
  medicineCategory: {
      label: i18n('entities.medicineEnum.fields.medicineCategory'),
      render: filterRenders.relationToOne(),
    },
  genericName: {
    label: i18n('entities.medicineEnum.fields.genericName'),
    render: filterRenders.generic(),
  },
  compositionName: {
    label: i18n('entities.medicineEnum.fields.compositionName'),
    render: filterRenders.generic(),
  },
  msrpRange: {
    label: i18n('entities.medicineEnum.fields.msrpRange'),
    render: filterRenders.decimalRange(2),
  },
  unit: {
    label: i18n('entities.medicineEnum.fields.unit'),
    render: filterRenders.enumerator('entities.medicineEnum.enumerators.unit',),
  },
  tabletsPerStripRange: {
    label: i18n('entities.medicineEnum.fields.tabletsPerStripRange'),
    render: filterRenders.range(),
  },
}

function MedicineEnumListFilter(props) {
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
                    name="medicineName"
                    label={i18n('entities.medicineEnum.fields.medicineName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="keptInStock"
                    label={i18n('entities.medicineEnum.fields.keptInStock')}
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
                  <SelectFormItem
                    name="isCommon"
                    label={i18n('entities.medicineEnum.fields.isCommon')}
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
                  <MedicineCategoryEnumAutocompleteFormItem  
                    name="medicineCategory"
                    label={i18n('entities.medicineEnum.fields.medicineCategory')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="genericName"
                    label={i18n('entities.medicineEnum.fields.genericName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="compositionName"
                    label={i18n('entities.medicineEnum.fields.compositionName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="msrpRange"
                    label={i18n('entities.medicineEnum.fields.msrpRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="unit"
                    label={i18n('entities.medicineEnum.fields.unit')}
                    options={medicineEnumEnumerators.unit.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.medicineEnum.enumerators.unit.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="tabletsPerStripRange"
                    label={i18n('entities.medicineEnum.fields.tabletsPerStripRange')}      
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

export default MedicineEnumListFilter;