import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const CountrySearch = () => {

  const [age, setAge] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Box 
      sx={{display: 'flex', 
      justifyContent: 'space-between'}}>
        <TextField
          id="outlined-basic"
          label="Search for a country"
          variant="outlined" />
        <FormControl sx={{ width: '10rem' }}>
          <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'Africa'}>Africa</MenuItem>
            <MenuItem value={'America'}>America</MenuItem>
            <MenuItem value={'Asia'}>Asia</MenuItem>
            <MenuItem value={'Europe'}>Europe</MenuItem>
            <MenuItem value={'Oceania'}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>

    </Box>
  )
}

export default CountrySearch;