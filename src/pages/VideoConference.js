import { Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import VideoCall from '../components/VideoComponents/VideoCall';

const VideoConference = () => {
    const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{ height:750 }}>
        <Typography variant='h2'>Video Conference</Typography>
        {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
          sx={{marginTop:1}}
        >
          Join Call
        </Button>
      )}
    </div>

  )
}

export default VideoConference;