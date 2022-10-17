import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function MobileSelectLanguage() {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="Mobile-Language-Select">Language</InputLabel>
        <Select
          labelId="Mobile-Language-Select"
          id="Mobile-Language-Select"
          value={language}
          onChange={handleChange}
          minwidth="200px"
          label="Language"
        >
          <MenuItem value="Euro">
            <em>Euro</em>
          </MenuItem>
          <MenuItem value={"BG"}>BG</MenuItem>
          <MenuItem value={"EN"}>EN</MenuItem>

        </Select>
      </FormControl>
  );
}