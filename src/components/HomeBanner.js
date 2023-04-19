import React from 'react'
import {Paper, Box, Grid, Typography} from '@mui/material'

const HomeBanner = () => {
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
      backgroundImage: `url(${"https://pro2-bar-s3-cdn-cf5.myportfolio.com/6eeae5a2e91d6f4cf1067e6935759146/69e4cc7c-29a2-472c-b35f-a899ac5ef803_rw_1920.jpg?h=c742ebc7dea9104a66476894ad713745"})`,
    }}
  >
    {/* Increase the priority of the hero background image */}
    {<img style={{ display: 'none' }} src={"https://pro2-bar-s3-cdn-cf5.myportfolio.com/6eeae5a2e91d6f4cf1067e6935759146/69e4cc7c-29a2-472c-b35f-a899ac5ef803_rw_1920.jpg?h=c742ebc7dea9104a66476894ad713745"} alt="Image not loading" />}
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
          <Typography component="h1" variant="h2" color="inherit" gutterBottom>
            Welcome to Project.IO
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default HomeBanner