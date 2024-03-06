import { Box } from '@mui/material';
import Header from './Header'
import CountrySearch from './CountrySearch';

const MainContainer = () => {
  return (
    <Box>
      <Header />
      <CountrySearch />
    </Box>
  )
}

export default MainContainer;