import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GroupCard(props) {

  const {group} = props
  //need to pass the group info as a prop in here and create a page route for the group
  //pass the info
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1263894949/vector/living-room-interior-with-sofa-and-tv-apartment.jpg?s=612x612&w=0&k=20&c=QT6fI_oqsM40lY12r2o3EIIjOUphw0R8RcCvkCUz2RA="
        title="Group"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {group.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {group.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`group/${group.id}`}>Join</Button>
      </CardActions>
    </Card>
  );
}
