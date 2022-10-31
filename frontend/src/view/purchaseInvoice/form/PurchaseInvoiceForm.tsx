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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import moment from 'moment';
import purchaseOrderEntryEnumerators from 'src/modules/purchaseOrderEntry/purchaseOrderEntryEnumerators';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  purchaseOrder: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.purchaseOrder'),
    {},
  ),
  invoiceNumber: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.invoiceNumber'),
    {
      "required": true,
      "max": 255,
      "min": 2
    },
  ),
  referenceNumber: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.referenceNumber'),
    {},
  ),
  // Yuck -- having these screws up the return
  // batches: yupFormSchemas.relationToMany(
  //   i18n('entities.purchaseInvoice.fields.batches'),
  //   {},
  // ),
  grossAmount: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.grossAmount'),
    {
      "required": true,
      "scale": 2,
      "min": 0
    },
  ),
  stateGST: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.stateGST'),
    {
      "scale": 2
    },
  ),
  centralGST: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.centralGST'),
    {
      "scale": 2
    },
  ),
  grandTotal: yupFormSchemas.decimal(
    i18n('entities.purchaseInvoice.fields.grandTotal'),
    {
      "scale": 2
    },
  ),
  invoiceDate: yupFormSchemas.date(
    i18n('entities.purchaseInvoice.fields.invoiceDate'),
    {},
  ),
  invoicePaidDate: yupFormSchemas.date(
    i18n('entities.purchaseInvoice.fields.invoicePaidDate'),
    {},
  ),
  paymentDetails: yupFormSchemas.string(
    i18n('entities.purchaseInvoice.fields.paymentDetails'),
    {
      "max": 255
    },
  ),
  inventoryAddDate: yupFormSchemas.date(
    i18n('entities.purchaseInvoice.fields.inventoryAddDate'),
    {},
  ),
});

function PurchaseInvoiceForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    const poEntries = props.record.purchaseOrderEntries;
    const purchaseOrderId = props.record.purchaseOrderId;

    let precreatedBatches = poEntries.map(function(elem, index) {
      return {
        poLabel:    elem.purchaseOrderEntryLookup,
        poUnit:     elem.unit,
        poCost:     elem.totalCost,
        quantity:   elem.quantity,
        unitPrice:  elem.unitCost,
        totalPrice: elem.totalCost,
        stateGST:   elem.stateGST,
        centralGST: elem.centralGST,
        medicine:   {id: elem.medicineId}, 
        unit:       elem.unit,
      }
    });
    let totalInvoiceCost = poEntries.reduce(function(accumulator, entry) {return accumulator + Number(entry.totalCost);}, 0);
    let totalInvoiceStateGST = poEntries.reduce(function(accumulator, entry) {return accumulator + Number(entry.stateGST);}, 0);
    let totalInvoiceCentralGST = poEntries.reduce(function(accumulator, entry) {return accumulator + Number(entry.centralGST);}, 0);
    let grandTotal = totalInvoiceCost + totalInvoiceStateGST + totalInvoiceCentralGST;

    return {
      purchaseOrder: purchaseOrderId,
      invoiceNumber: record.invoiceNumber,
      referenceNumber: record.referenceNumber,
      batches: record.batches || precreatedBatches,
      grossAmount: record.grossAmount || totalInvoiceCost,
      stateGST: record.stateGST || totalInvoiceStateGST,
      centralGST: record.centralGST || totalInvoiceCentralGST,
      grandTotal: record.grandTotal || grandTotal,
      invoiceDate: record.invoiceDate ? moment(record.invoiceDate, 'YYYY-MM-DD') : null,
      invoicePaidDate: record.invoicePaidDate ? moment(record.invoicePaidDate, 'YYYY-MM-DD') : null,
      paymentDetails: record.paymentDetails,
      inventoryAddDate: record.inventoryAddDate ? moment(record.inventoryAddDate, 'YYYY-MM-DD') : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });


  const onSubmit = (values) => {
    let totalInvoiceCost = values.batches.reduce(function(accumulator, entry) {return accumulator + Number(entry.totalPrice);}, 0);
    let totalInvoiceStateGST = values.batches.reduce(function(accumulator, entry) {return accumulator + Number(entry.stateGST);}, 0);
    let totalInvoiceCentralGST = values.batches.reduce(function(accumulator, entry) {return accumulator + Number(entry.centralGST);}, 0);

    values.grossAmount = totalInvoiceCost;
    values.centralGST  = totalInvoiceCentralGST;
    values.stateGST    = totalInvoiceStateGST;

    values.grandTotal  = totalInvoiceCost + totalInvoiceStateGST + totalInvoiceCentralGST;
     
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };
  
  const { saveLoading, modal } = props;

  function renderBatchTable(batches) {
    return (
      <Table style={{ borderRadius: '2px', border: '1px solid rgb(224, 224, 224)', borderCollapse: 'initial', paddingBottom: '75px'}}>
      <TableHead>
        <TableRow>
          <TableCell>Ordered</TableCell>
          <TableCell>Medicine</TableCell>
          <TableCell>Batch Number</TableCell>
          <TableCell>Qty*</TableCell>
          <TableCell>Units</TableCell>
          <TableCell>Expiry Date*</TableCell>
          <TableCell>Total Cost</TableCell>
          <TableCell>S-GST</TableCell>
          <TableCell>C-GST</TableCell>
        </TableRow>
      </TableHead>
      <TableBody> 
      {
        batches.map((val, index) => (
        <TableRow key={"batches-" + index}>
          <TableCell style={{width:300}}>{val.poLabel + " @ Rs" + val.poCost}</TableCell>
          <TableCell><MedicineEnumAutocompleteFormItem  name={"batches[" + index + "].medicine"} required={true}/></TableCell>
          <TableCell style={{width:250}}><InputFormItem name={"batches["+ index + "].batchNumber"} required={true}/></TableCell>
          <TableCell style={{width:125}}><InputFormItem name={"batches[" + index + "].quantity"} required={true}/></TableCell>
          <TableCell style={{width:200}}><SelectFormItem name={"batches[" + index + "].unit"}
             options= {
               purchaseOrderEntryEnumerators.unit.map((value) => ({
                 value, label: i18n(`entities.purchaseOrderEntry.enumerators.unit.${value}`,),
               }),
            )}
            required={true}
          /> 
          </TableCell>
          <TableCell style={{width:150}}><DatePickerFormItem name={"batches[" + index + "].expiryDate"} required={true}/></TableCell>
          <TableCell style={{width:150}}><InputFormItem name={"batches[" + index + "].totalPrice"} required={true}/></TableCell>
          <TableCell style={{width:100}}><InputFormItem name={"batches[" + index + "].stateGST"} required={true}/></TableCell>
          <TableCell style={{width:100}}><InputFormItem name={"batches[" + index + "].centralGST"} required={true}/></TableCell>
        </TableRow> 
      ),)
     } 
     </TableBody>
    </Table>
    );
  }

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <input type="hidden" name="purchaseOrder" {...form.register("purchaseOrder")}/>
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="invoiceNumber"
                label={i18n('entities.purchaseInvoice.fields.invoiceNumber')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referenceNumber"
                label={i18n('entities.purchaseInvoice.fields.referenceNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TableContainer component={Paper}>
                  { renderBatchTable(initialValues.batches) }
              </TableContainer>
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="grossAmount"
                label={i18n('entities.purchaseInvoice.fields.grossAmount')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="stateGST"
                label={i18n('entities.purchaseInvoice.fields.stateGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="centralGST"
                label={i18n('entities.purchaseInvoice.fields.centralGST')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="grandTotal"
                label={i18n('entities.purchaseInvoice.fields.grandTotal')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="invoiceDate"
                label={i18n('entities.purchaseInvoice.fields.invoiceDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="invoicePaidDate"
                label={i18n('entities.purchaseInvoice.fields.invoicePaidDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="paymentDetails"
                label={i18n('entities.purchaseInvoice.fields.paymentDetails')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="inventoryAddDate"
                label={i18n('entities.purchaseInvoice.fields.inventoryAddDate')}
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

export default PurchaseInvoiceForm;
