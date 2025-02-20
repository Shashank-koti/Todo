import "./weatherForm.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherDisplay({info}) {

  return (
    <>
    <div className="info">
      <h1>Details:</h1>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345}}><CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>temp = {info.temp}&deg;</p>
          <p>feels_like = {info.feels_like}&deg;</p>
          <p>humidity = {info.humidity}</p>
          <p>temp_max = {info.temp_max}&deg;</p>
          <p>temp_min = {info.temp_min}&deg;</p>
          <p>The weather can be described as <b>{info.weather}</b> feels like {info.feels_like}&deg;</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  )
}
