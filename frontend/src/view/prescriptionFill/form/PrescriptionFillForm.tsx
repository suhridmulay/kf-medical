import {
  DataGrid,
  GridColDef,
  GridRowModel,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import { i18n } from 'src/i18n';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Paper } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';

const schema = yup.object().shape({
  patientVisit: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.patientVisit'),
    {
      required: false,
    },
  ),
  medicine: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.medicine'),
    {
      required: false,
    },
  ),
  siteInventory: yupFormSchemas.relationToOne(
    i18n('entities.prescriptionFill.fields.siteInventory'),
    {},
  ),
});

interface IMedicineRecord {
  id: number;
  medicine: string;
  qty: number;
  inventory: string;
}

function total(records: IMedicineRecord[]) {
  let total = new Map<string, { quantity: number }>();
  for (let record of records) {
    const oldTotal = total.get(record.medicine) || {
      quantity: 0,
    };
    total.set(record.medicine, {
      quantity: oldTotal.quantity + record.qty,
    });
  }
  return total;
}

function validateRow(row: Partial<IMedicineRecord>) {
  return (
    row.medicine &&
    row.medicine.length > 0 &&
    row.qty &&
    row.qty > 0 &&
    row.inventory &&
    row.inventory.length > 0
  );
}

function BillFooter({
  totals,
}: {
  totals: Map<string, { quantity: number }>;
}) {
  const keys = Array.from(totals.keys());
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {keys.map((key) =>
          key && key.length > 0 ? (
            <Grid item xs={3}>
              <Paper sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>{key}</Typography>
                  <Typography>
                    {totals.get(key)?.quantity || 0}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ) : null,
        )}
      </Grid>
    </Box>
  );
}

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

  const medicineList = props.record.medicines.rows.map(
    (x) => x.medicineName,
  );
  medicineList.push(''); // Empty string for initial empty
  const medicineInventory =
    props.record.medicineInventory.rows;

  // key is medicineName; value is a list of matching inventory items
  const medicineInventoryMap = new Map<string, string[]>();

  for (var i = 0; i < medicineInventory.length; i++) {
    let medicineName =
      medicineInventory[i].medicine.medicineName;
    let newValue = medicineInventory[i].siteBatchIdentifier;
    if (medicineInventoryMap[medicineName]) {
      let entry = medicineInventoryMap[medicineName];
      entry.push(newValue);
    } else {
      medicineInventoryMap[medicineName] = [newValue];
    }
  }

  const columns: GridColDef[] = [
    {
      field: 'medicine',
      headerName: 'Medicine',
      type: 'singleSelect',
      width: 250,
      editable: true,
      valueOptions: ({ row }) => {
        return medicineList;
      },
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'inventory',
      headerName: 'Batch',
      type: 'singleSelect',
      width: 650,
      editable: true,
      valueOptions: ({ row }) => {
        return medicineInventoryMap[row.medicine] || [];
      },
    },
  ];

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const { saveLoading, modal } = props;
  const patientVisit = props.record.patientVisit;
  const medicines = props.record.medicines.rows;
  const medicineInventories = props.record.medicineInventory.rows;

  const handleSubmit = () => {
    const records = formRows.map(row => ({
      patientVisit: patientVisit.id,
      medicineInventory: medicineInventories.find(inventory => inventory.center.name === row.inventory.split('|')[0]?.trim()).id,
      medicine: medicines.find(med => med.medicineName === row.medicine)?.id,
      quantity: row.qty
    }))
    props.onSubmit(props.record.id, records);
  }

  const BLANK_ROW = (id: number) => ({
    id: id,
    medicine: '',
    qty: 0,
    inventory: '',
  });

  const [formRows, setFormRows] = useState<
    IMedicineRecord[]
  >([]);

  const processRowUpdate = useCallback(
    (newRow: GridRowModel<IMedicineRecord>) => {
      const record = newRow;
      const index = newRow.id;
      setFormRows((oldFormRows) => {
        const rows = [...oldFormRows];
        rows[index] = { ...record };
        return rows;
      });
      return record;
    },
    [formRows],
  );

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2ch'
      }}
    >
      <Box>
        <Button
          variant="contained"
          onClick={() =>
            setFormRows((oldFormRows) => [
              ...oldFormRows,
              BLANK_ROW(oldFormRows.length),
            ])
          }
        >
          Add Row
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
      <DataGrid
        experimentalFeatures={{ newEditingApi: true }}
        rows={formRows}
        columns={columns}
        processRowUpdate={processRowUpdate}
        components={{
          Footer: () => (
            <BillFooter totals={total(formRows)} />
          ),
        }}
      />
      <Box>
        <Button>Submit Prescription</Button>
      </Box>
    </div>
  );
}

export default PrescriptionFillForm;
