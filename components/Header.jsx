import { Typography, Box, Button } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Header = () => {
    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem 2rem'
            }}>
            <Typography
                variant="h1"
                sx={{ fontSize: "2rem", fontWeight: 700 }}>
                Where in the world?
            </Typography>
            <Button>
            <DarkModeIcon />
                Dark Mode
            </Button>
        </Box>
    )
}

export default Header;