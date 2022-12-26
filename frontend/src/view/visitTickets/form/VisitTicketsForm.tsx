import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import visitTicketsEnumerators from 'src/modules/visitTickets/visitTicketsEnumerators';
import PatientVisitAutocompleteFormItem from 'src/view/patientVisit/autocomplete/PatientVisitAutocompleteFormItem';

const schema = yup.object().shape({
  patientVisit: yupFormSchemas.relationToOne(
    i18n('entities.visitTickets.fields.patientVisit'),
    {},
  ),
  department: yupFormSchemas.enumerator(
    i18n('entities.visitTickets.fields.department'),
    {
      "options": visitTicketsEnumerators.department
    },
  ),
  ticketCount: yupFormSchemas.integer(
    i18n('entities.visitTickets.fields.ticketCount'),
    {
      "max": 20
    },
  ),
});

function VisitTicketsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patientVisit: record.patientVisit,
      department: record.department,
      ticketCount: record.ticketCount,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PatientVisitAutocompleteFormItem  
                name="patientVisit"
                label={i18n('entities.visitTickets.fields.patientVisit')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
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
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="ticketCount"
                label={i18n('entities.visitTickets.fields.ticketCount')}  
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default VisitTicketsForm;
