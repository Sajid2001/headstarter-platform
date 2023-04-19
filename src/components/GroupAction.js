import React from 'react'
import {Grid, Card, CardActions,Typography, Button, CardContent} from '@mui/material'

const GroupAction = (props) => {
    const {action} = props;
  return (
    <Grid item xs={12} md={6}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {action.title}
        </Typography>
        <Typography variant="body2">
          {action.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">{action.button_text}</Button>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default GroupAction