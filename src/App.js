import { Box, Stack, Typography, Avatar } from '@mui/material';
import iconSvg from './Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/logo-mark.svg';
import backgroundImage from './Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/background-desktop.png'
import Home from './Pages/Home';
import Ticket from './Pages/Ticket';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
  <Box sx={{
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 0,
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
        
    
  }}>
      <Stack direction = 'row' textAlign = 'center' justifyContent = 'center' spacing = {2} sx={{marginTop: 2, marginBottom: 6}}>
        <Avatar src={iconSvg} sx={{height : 24, width : 24, marginRight: 1}} />
         <Typography variant="body1" fontWeight= 'bold'>Coding Conf</Typography>
      </Stack>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/ticket' element= {<Ticket />}></Route>
        </Routes>
  </Box> 
  </BrowserRouter>

  );
}

export default App;
