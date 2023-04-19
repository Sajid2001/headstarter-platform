import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Container, TextField, Typography, Button, Paper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import CssBaseline from "@mui/material/CssBaseline";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import { Timestamp } from "firebase/firestore";

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

function GroupCalendar() {
  const [newEvent, setNewEvent] = useState({title:"", start:"",end:""})
  const [allEvents, setAllEvents] = useState([]);
  const params = useParams();
  const groupRef = doc(db,"groups",params.id)

  useEffect(() =>{
      const getEvents = async () =>{
        const snapshot = await getDoc(groupRef);
        console.log(snapshot);
        const eventsData = snapshot.data().events
        const events = eventsData.map(event => {
          return{
            start:event.start.toDate(),
            end:event.end.toDate(),
            title:event.title,
          }
        })
        setAllEvents(events)
    }
    getEvents();
  },[])


  const addEvent = async() => {
    const events = [
    ...allEvents.map((event) => ({
      start: Timestamp.fromDate(new Date(event.start)),
      end: Timestamp.fromDate(new Date(event.end)),
      title: event.title,
    })),
    {
      title: newEvent.title,
      start: Timestamp.fromDate(new Date(newEvent.start)),
      end: Timestamp.fromDate(new Date(newEvent.end)),
    },
  ];
    await updateDoc(groupRef, { events: events });
  }

 function handleAddEvent(){
      addEvent();
  }

  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2" sx={{marginBottom:4}}>
            Calendar
          </Typography>
          <Paper elevation={3} sx={{padding:5}}>
          <Typography component="h1" variant="h4">
            Add Event
          </Typography>
          <Box component="form" onSubmit={handleAddEvent} noValidate sx={{ mt: 1 }}>
            <TextField
                id="filled-search"
                required
                fullWidth
                label="Add Title"
                type="text"
                variant="filled"
                value={newEvent.title} 
                onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}
              />  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={[
                  'DatePicker',
                  'DatePicker',
                ]}>
                  <DemoItem>
                    <DatePicker label="Choose a Start Date" value = {newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} sx={{margin:3}}/>
                  </DemoItem>
                  <DemoItem>
                    <DatePicker label="Choose an End Date" value = {newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} sx={{margin:3}}/>
                  </DemoItem>
              </DemoContainer>
          </LocalizationProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ my:2 }}
              onClick={handleAddEvent}
            >
              Add Event
            </Button>
          </Box>
          </Paper>
        </Box>
      </Container>
      <Calendar localizer={localizer} events={allEvents} 
      startAccessor="start" endAccessor="end" style={{height: 750, margin:"50px"}}/>      
    </div>
  );
}

export default GroupCalendar;
