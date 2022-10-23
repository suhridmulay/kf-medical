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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  patientVisit: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.patientVisit'),
    {
      "required": false
    },
  ),
  med1Qty: yupFormSchemas.integer(
    i18n('entities.prescriptionFill.fields.quantity'),
    {
      "required": false
    },
  ),
  med2Qty: yupFormSchemas.integer(
    i18n('entities.prescriptionFill.fields.quantity'),
    {
      "required": false
    },
  ),
  med3Qty: yupFormSchemas.integer(
    i18n('entities.prescriptionFill.fields.quantity'),
    {
      "required": false
    },
  ),
  med4Qty: yupFormSchemas.integer(
    i18n('entities.prescriptionFill.fields.quantity'),
    {
      "required": false
    },
  ),
  med1SiteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {
      "required": false
    },
  ),
  med2SiteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {
      "required": false
    },
  ),
  med3SiteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {
      "required": false
    },
  ),
  med4SiteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {
      "required": false
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

  const { saveLoading, modal } = props;
  const patientVisit = props.record.patientVisit;

  const onSubmit = (values) => {
    values.patientVisit = patientVisit.id;
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  function renderTableRow (medQty, medDetails, medInventory, formQtyName, formMedBatch)  {
    if (!medDetails) 
      return;

    return (
      <TableRow>
      <TableCell component="th" scope="row" style={{width:200}}>Qty {medQty} of {medDetails.medicineName}</TableCell>
      <TableCell align="right" style={{width:600 }}>
        <SelectFormItem name={formMedBatch} label="Medicine Batch"
          options={medInventory.rows.map(
            (value) => ({
              value,
              label: value.siteBatchIdentifier + " | Current Count: " + value.currentCount + " | Stocked on: " + value.inventoryAddDate,
            }),
          )}
          required={false}
        />
      </TableCell>
      <TableCell align="right" style={{width:100}}>
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
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h2>Patient visit for {patientVisit.patient.fullName} on {patientVisit.visitDate}</h2>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TableContainer component={Paper}>
                <Table style={{ borderRadius: '5px', border: '1px solid rgb(224, 224, 224)', borderCollapse: 'initial', paddingBottom: '100px'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Prescribed</TableCell>
                      <TableCell align="center">Batch Number</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderTableRow(props.record.med1Qty, props.record.med1, props.record.med1Inventory, "med1Qty", "med1SiteInventory")}
                    {renderTableRow(props.record.med2Qty, props.record.med2, props.record.med2Inventory, "med2Qty", "med2SiteInventory")}
                    {renderTableRow(props.record.med3Qty, props.record.med3, props.record.med3Inventory, "med3Qty", "med3SiteInventory")}
                    {renderTableRow(props.record.med4Qty, props.record.med4, props.record.med4Inventory, "med4Qty", "med4SiteInventory")}
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
