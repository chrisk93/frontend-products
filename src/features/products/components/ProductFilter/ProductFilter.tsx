import { TextField } from '@mui/material';

interface ProductFilterProps {
  value: string;
  onSearchChange: (value: string) => void;
}

export const ProductFilter = ({
  value,
  onSearchChange,
}: ProductFilterProps) => {
  return (
    <TextField
      fullWidth
      label="Buscar producto"
      placeholder="Ej. Laptop"
      value={value}
      onChange={(event) =>
        onSearchChange(event.target.value)
      }
      margin="normal"
    />
  );
};