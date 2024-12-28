import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Typography, Box, Stack, Avatar } from '@mui/material'
import PatternSvg from '../Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/pattern-ticket.svg'
import iconSvg from '../Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/logo-mark.svg';
import GithubSvg from '../Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/icon-github.svg'

const Ticket = () => {
  const location = useLocation()
  const {name, email, gusername, image,} = location.state
  return (
    <Container sx={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         height: '100vh',
         textAlign: 'center'

    }}>
      <Stack spacing={5}>
      <Typography variant='h3'>Congrats, {name}!<br/>Your ticket is ready.</Typography>
      <Typography variant='subtitle1 '> We've emailed your ticket to <br/> {email} and will send updates in <br/> the run up to the event.</Typography>
      </Stack>
      
      <Box sx={{
        position: 'relative',
        marginTop: '40px'
        
      }}> 
        <img src={PatternSvg} alt='pattern'/>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-92%, -50%)',
        }}>
          <Stack direction='row' spacing={2} sx={{
            display: 'flex',
          }}> 
            <Avatar src={iconSvg} alt='icon' sx={{
              width: '26',
              height: '26',
              marginRight: '1',
              display: 'flex',
              alignSelf: 'flex-start',
              
            }}/>
          <Typography variant='h5'>Coding Conf <br /> <Typography variant='caption'>Jan 31, 2025 / Austin, TX</Typography></Typography>
          </Stack>
          <Stack direction='row' spacing={2} sx={{
            display: 'flex',
            marginTop: '60px'
          }}> 
            <Avatar src={image} alt='profile' sx={{
              width: '26',
              height: '26',
              marginRight: '1',
              borderRadius: '5px' ,
              display: 'flex',
              alignSelf: 'flex-start'             
            }}/>
          <Typography variant='h5' > {name}<Typography sx= {{display: 'flex', flexDirection: 'row',}} variant='caption'>
            <Avatar src={GithubSvg} sx={{
              width: '25px', height : '25px', marginRight: '2px'}}/> {gusername}
            </Typography></Typography>
          </Stack>
          </Box> 
      </Box>
       
    </Container>
  )
}
 
export default Ticket