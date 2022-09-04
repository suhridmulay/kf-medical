import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

const schema = yup.object().shape({
  patientVisit: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.patientVisit'),
    {
      "required": true
    },
  ),
  siteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {
      "required": true
    },
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.prescriptionFill.fields.quantity'),
    {
      "required": true
    },
  ),
});

function PrescriptionFillForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      patientVisit: record.patientVisit,
      siteInventory: record.siteInventory,
      quantity: record.quantity,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    console.log("Onsubmit: " + JSON.stringify(values));
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;
  const patientVisit = props.record.patientVisit;

  function renderTableRow (medQty, medDetails, medInventory, formQtyName, formMedBatch)  {
    if (!medDetails) 
      return;

    return (
      <TableRow>
      <TableCell component="th" scope="row">Qty {medQty} of {medDetails.medicineName}</TableCell>
      <TableCell align="right">
        <select {...formMedBatch}>
          {medInventory.rows.map((x) =>
            <option value={x.id}>{x.siteBatchIdentifier} | Count: {x.currentCount}</option>
          )}
        </select>
      </TableCell>
      <TableCell align="right">
      <InputNumberFormItem
          name={formQtyName}
          label="Qty"
          required={true}
        />
      </TableCell>
    </TableRow>
    );
  }

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <h2>Patient visit for {patientVisit.patient.fullName} on {patientVisit.visitDate}</h2>
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TableContainer component={Paper}>
                <Table style={{ borderRadius: '5px', border: '1px solid rgb(224, 224, 224)', borderCollapse: 'initial'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Prescribed</TableCell>
                      <TableCell align="center">Batch Number</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderTableRow(props.record.med1Qty, props.record.med1, props.record.med1Inventory, "med1BatchQty", "med1BatchSelected")}
                    {renderTableRow(props.record.med2Qty, props.record.med2, props.record.med2Inventory, "med2BatchQty", "med2BatchSelected")}
                  </TableBody>
                </Table>
              </TableContainer>
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

export default PrescriptionFillForm;
