import { Box, Grid, Typography, Button, Container, Divider} from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard'
import AddIcon from '@mui/icons-material/Add';
import { db } from'../firebase'
import { collection, getDocs } from 'firebase/firestore'

const GroupPage = () => {

    //need to read from api and get data
    //loop in the html inside the grid container and pass the group into the card
    const [groups,setGroups] = useState([]);
    const groupsCollectionRef = collection(db, "groups")
    useEffect(() => {
        const getGroups = async () =>{
            const data = await getDocs(groupsCollectionRef);
            console.log(data);
            setGroups(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        getGroups();
    },[])

  return (
    <Box textAlign="center">
        <Container maxWidth="sm">
            <Typography variant='h1' component='h1' sx={{margin:3}}>
                Groups
            </Typography>
            <Button variant="contained" sx={{marginBottom:4}} href='group/create'> Create a new group <AddIcon/></Button>
        </Container>
        
        <Grid container spacing={5}>
            {groups.map((group) =>{
                return( 
                <Grid item key={group.id}>
                    <GroupCard group={group}/>
                </Grid>)
            })}
            

        </Grid>
    </Box>
    
    
  )
}

export default GroupPage