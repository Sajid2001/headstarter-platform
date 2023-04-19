import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Paper, Box, Typography, Button } from '@mui/material';

const HomeAction = (props) => {
    const {action} = props;
  return (
    <Grid item xs={12} md={6}>
      <Paper sx ={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${action.image})`,
      }}>
        {<img style={{ display: 'none' }} src={action.image} alt="Image not loading" />}
        <Grid container>
      <Grid item md={6}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h2" color="inherit" gutterBottom>
            {action.description}
          </Typography>
          <Button variant='contained' href={action.link}> Go <ArrowForwardIcon sx={{ml:1}}/> </Button>
        </Box>
      </Grid>
    </Grid>
      </Paper>
    </Grid>
  )
}

export default HomeAction