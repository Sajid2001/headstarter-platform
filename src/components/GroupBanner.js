import React from 'react'
import {Paper, Box, Grid, Typography, Button} from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';

const GroupBanner = (props) => {
    const { group, id } = props;
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${"https://rare-gallery.com/mocahbig/428777-pixel-art-pixelated-pixels-digital-art-computer.png"})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={"https://rare-gallery.com/mocahbig/428777-pixel-art-pixelated-pixels-digital-art-computer.png"} alt="Image not loading" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {group.name}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx={{mb:4}}>
              {group.description}
            </Typography>
            <Button variant='contained' href={`/account/conference/${id.id}`}> <VideoCallIcon sx={{mr:1}}/>Enter Video Call</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default GroupBanner