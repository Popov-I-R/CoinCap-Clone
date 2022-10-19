import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function MobileSelectCurrency() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="Mobile-Currency-Select">Currency</InputLabel>
        <Select
        sx={{
          backgroundColor: "white",
        }}
          labelId="Mobile-Currency-Select"
          id="Mobile-Currency-Select"
          value={currency}
          onChange={handleChange}
          minwidth="200px"
          label="Currency"
        >
          <MenuItem value="Euro">
            <em>Euro</em>
          </MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"BGN"}>BGN</MenuItem>

        </Select>
      </FormControl>
  );
}