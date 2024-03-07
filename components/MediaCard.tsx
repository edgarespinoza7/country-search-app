import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  region: string;
  population: number;
  flag: string;
  capital: string;
}



const MediaCard = ({ name, population, region, capital, flag }: Props) => {

  return (
    <div>
      <Card sx={{ width: '20vw', marginBottom: '2rem' }}>
        <CardMedia
          sx={{ height: '10vh' }}
          image={flag}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: '1.5rem', fontWeight: 700 }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Population:</b> {population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Region:</b> {region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Capital:</b> {capital}
          </Typography>
        </CardContent>

      </Card>
    </div>

  )
}

export default MediaCard;