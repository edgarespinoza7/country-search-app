import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const MediaCard = (props: { name: string; population: number; region: string; capital: string; }) => {
    return (
        <div>
            <Card sx={{ width: '20vw' }}>
            <CardMedia
                sx={{ height: '10vh' }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.capital}
                </Typography>
            </CardContent>
          
        </Card>
        </div>
        
    )
}

export default MediaCard;