import Typography  from '@mui/material/Typography'
import { Container, Grid } from '@mui/material'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAction from '../components/HomeAction'

const actions = [
    {
        description:"Join a project",
        image:"https://images.gamebanana.com/img/ss/mods/6302c5e6c248d.jpg",
        link:"/account/groups"
    },
    {
        description:"Create a Group",
        image:"https://c4.wallpaperflare.com/wallpaper/77/395/701/pixel-art-andlt-aestheticandgt-town-city-waneella-hd-wallpaper-preview.jpg",
        link:"/account/group/create"
    },
]

const HomePage = () => {
  return (
    <Container maxWidth="lg">
        <main>
          <HomeBanner/>
          <Grid container spacing={4}>
            {actions.map((action) => {
                return(
                    <HomeAction action = {action}/>
                )
            })}
          </Grid>
        </main>
      </Container>
  )
}

export default HomePage