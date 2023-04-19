import { Container} from '@mui/material'
import React from 'react'
import GroupBanner from '../components/GroupBanner'
import GroupCalendar from '../components/GroupCalendar'
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";
import { useState, useEffect } from 'react';

const SingleGroup = () => {

  const params = useParams();
  const groupRef = doc(db,"groups",params.id)
  const [group,setGroup] = useState([]);

  useEffect(() => {
    const getGroup = async () =>{
      const snapshot = await getDoc(groupRef);
      console.log(snapshot);
      setGroup(snapshot.data())
      
      console.log(snapshot.data().events)
  }
  getGroup();
},[])
  

  return (
    <Container>
        <GroupBanner group ={group} id = {params} />
        <GroupCalendar events = {group.events}/> 
    </Container>
  )
}

export default SingleGroup