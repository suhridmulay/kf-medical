import { MRT_Row } from 'material-react-table';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

export const MedicineCellRenderer: React.FC<{
  row: MRT_Row;
}> = ({ row }) => {
  const rowIdx = row.index;
  return (
    <MedicineEnumAutocompleteFormItem
      style={{ width: '100%' }}
      name={'batches[' + rowIdx + '].medicine'}
      required={true}
    />
  );
};

export const InputFormCellRenderer =
  (property: string, required: boolean = false) =>
  ({ row }: { row: MRT_Row }) => {
    const rowIdx = row.index;
    return (
      <InputFormItem
        name={`batches[${rowIdx}].${property}`}
        required={required}
      />
    );
  };

export const DatePickerFormCellRenderer =
  (property: string, required: boolean = false) =>
  ({ row }: { row: MRT_Row }) => {
    const rowIdx = row.index;
    return (
      <DatePickerFormItem
        name={`batches[${rowIdx}].${property}`}
        required={required}
      />
    );
  };

export const SelectCellRenderer =
  (
    property: string,
    required: boolean,
    options: { value: string; label: string }[],
  ) =>
  ({ row }: { row: MRT_Row }) => {
    const rowIdx = row.index;
    return (
      <SelectFormItem
        name={`batches[${rowIdx}].${property}`}
        options={options}
        required={required}
      />
    );
  };
