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
        image={info.temp>20?"https://plus.unsplash.com/premium_photo-1688804790113-809f21d2e7cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D":info.temp>10?"https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnl8ZW58MHx8MHx8fDA%3D":"https://images.unsplash.com/photo-1581002386342-65ca4cf53a5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"}
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
