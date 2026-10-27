import { TextField } from '@mui/material';

interface ProductFilterProps {
  value: string;
  onSearchChange: (value: string) => void;
}

//holaaa
fun hola() {
  var mi funcion = ''
  
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