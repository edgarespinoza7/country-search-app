import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import MediaCard from "./MediaCard";
import { useStore } from "../store";

const CountrySearch = () => {

  const [age, setAge] = useState('');

  const mockData = [
    {
      name: 'Germany',
      population: 5500000,
      region: 'Europe',
      capital: 'Berlin',
    },
    {
      name: 'United States of America',
      population: 300000000,
      region: 'Americas',
      capital: 'Washington D.C.',
    },
    {
      name: 'Brazil',
      population: 180000000,
      region: 'Americas',
      capital: 'Brasilia',
    },
    {
      name: 'Iceland',
      population: 300000,
      region: 'Europe',
      capital: 'Reykjavik',
    },
  ]

  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Box 
      sx={{display: 'flex', 
      justifyContent: 'space-between',
      marginBottom: '4rem'
      }}>
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined" 
          sx={{width: '40vw', backgroundColor: isDarkMode ? '#2b3743' : '#fff'}}
          />
        <FormControl sx={{ width: '15vw', backgroundColor: isDarkMode ? '#2b3743' : '#fff' }}>
          <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value='Africa'>Africa</MenuItem>
            <MenuItem value='Americas'>America</MenuItem>
            <MenuItem value='Asia'>Asia</MenuItem>
            <MenuItem value='Europe'>Europe</MenuItem>
            <MenuItem value='Oceania'>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: '', flexDirection: 'row', flexWrap: 'wrap'}}>
        {mockData.map( (country, index) => {
        return (
          <MediaCard 
          key={index}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          />
        )
      })}
      </Box>
    </Box>
  )
}

export default CountrySearch;