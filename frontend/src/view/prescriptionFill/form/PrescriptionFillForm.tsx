import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  patientVisit: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.patientVisit'),
    {
      "required": false
    },
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.medicine'),
    {
      "required": false
    },
  ),
  siteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {},
  ),
});

function PrescriptionFillForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      patientVisit: record.patientVisit,
      medicine: record.medicine,
      quantity: record.quantity,
      siteInventory: record.siteInventory,
    };
  });

  const medicineList = props.record.medicines.rows.map((x) => x.medicineName);
  medicineList.push(''); // Empty string for initial empty
  const medicineInventory = props.record.medicineInventory.rows;
  
  // key is medicineName; value is a list of matching inventory items
  const medicineInventoryMap = new Map<string, string[]>(); 

  for (var i=0; i<medicineInventory.length; i++) {
    let medicineName = medicineInventory[i].medicine.medicineName;
    let newValue = medicineInventory[i].siteBatchIdentifier;
    if (medicineInventoryMap[medicineName]) {
      let entry = medicineInventoryMap[medicineName];
      entry.push(newValue);
    } else {
      medicineInventoryMap[medicineName] = [newValue];
    }
  }

  const columns: GridColDef[] = [
    { field: 'medicine', headerName: 'Medicine', 
      type: 'singleSelect', width: 250, editable: true, 
      valueOptions: ({ row }) => { return medicineList }},
    { field: 'qty', headerName: 'Quantity', type: 'number', width: 100, editable: true},
    { field: 'inventory', headerName: 'Batch', 
      type: 'singleSelect', width: 650, editable: true, 
      valueOptions: ({ row }) => { return medicineInventoryMap[row.medicine] || [] }},
  ];

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const { saveLoading, modal } = props;
  const patientVisit = props.record.patientVisit;


  let rowObjects:any = [];
  for (var id=1; id<=15; id++) {
    let newRow = { id: id, medicine: '', qty: 0, inventory: '' };    
    rowObjects.push(newRow);
  };

  const rows: GridRowsProp = rowObjects;

  return (
   <div style={{ height: 700, width: '100%' }}>
      <DataGrid experimentalFeatures={{ newEditingApi: true }} rows={rows} columns={columns} />
    </div>
  );
}

export default PrescriptionFillForm;
