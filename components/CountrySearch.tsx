import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import MediaCard from "./MediaCard";
import { useStore } from "../store";

const CountrySearch = () => {
  const [region, setRegion] = useState('');
  const [data, setData] = useState([
    {
      name: { common: '' },
      flags: { png: '' },
      capital: [''],
      population: 0,
      region: '',
    },
  ]);

  const [filteredCountries, setFilteredCountries] = useState(data);
  const [searchInput, setSearchInput] = useState('');

  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchInput(e.target.value)
  }

  useMemo(() => {

    let countries = [];

    if (region !== '') {
      countries = data.filter((country) => country.region === region);

      if (searchInput !== '') {
        setFilteredCountries(countries.filter((country) => country.name.common.
          toLowerCase().
          includes(searchInput.toLowerCase())
        )
        );
      } else {
        setFilteredCountries(countries);
      }
    } else if (region === '') {
      if (searchInput !== '') {
        setFilteredCountries(data.filter((country) => country.name.common.
          toLowerCase().
          includes(searchInput.toLowerCase())
        )
        );
      } else {
        setFilteredCountries(data);
      }
    }

  }, [data, region, searchInput]);


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
      .then((response) => response.json())
      .then((data) => { setData(data); setFilteredCountries(data) });
  }, []);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4rem'
        }}>
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined"
          sx={{ width: '40vw', backgroundColor: isDarkMode ? '#2b3743' : '#fff' }}
          onChange={(e) => {

            handleTyping(e);
          }}
        />
        <FormControl sx={{ width: '15vw', backgroundColor: isDarkMode ? '#2b3743' : '#fff' }}>
          <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='Africa'>Africa</MenuItem>
            <MenuItem value='Americas'>America</MenuItem>
            <MenuItem value='Asia'>Asia</MenuItem>
            <MenuItem value='Europe'>Europe</MenuItem>
            <MenuItem value='Oceania'>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
        {filteredCountries.map((country, index) => {
          return (
            <MediaCard
              key={index}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default CountrySearch;