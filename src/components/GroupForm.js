import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../firebase'

const theme = createTheme();

export default function GroupForm() {
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const groupsCollectionRef = collection(db, "groups")

    const createGroup = async() => {
        await addDoc(groupsCollectionRef,{name:newName, description:newDescription, members:[], events:[],})
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    createGroup();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Create Group
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Group Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => {setNewName(e.target.value)}}
            />
             <TextField
                id="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                defaultValue="Description"
                onChange={(e) => {setNewDescription(e.target.value)}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}