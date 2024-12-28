import React, { useState } from 'react'
import {  Container, FormControl, Input, Button, Box, TextField, Typography, Avatar, Stack, createTheme, ThemeProvider } from '@mui/material'
import IconSvg from '../Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/icon-upload.svg'
import InfoSvg from '../Assets/conference-ticket-generator-main/conference-ticket-generator-main/assets/images/icon-info.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail ] = useState('')
  const [emailError, setEmailError] = useState('')
  const [gusername, setGusername ] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [image, setImage ] = useState(null)
  const [imageError, setImageError ] = useState('')

  const theme = createTheme({
    palette: { 
      white: {
        main: '#FFFFFF' 
      },
      lightWhite: {
        main: 'rgba(255, 255, 255, 0.03)'
      },
      red: { 
          main: '#FF0000' 
      },
      transparent: {
        main: 'rgba(255, 255, 255, 0.1)'}
    },
  
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    setNameError('')
   setEmailError('')
   setUsernameError('')
   setImageError('')

    if (!name ||!email ||!gusername ||!image) {
     alert('Please fill in all required fields')
     return
    }

  if(!name) {
    setNameError('Please enter your full name.');
  }
  
  if(!email) {
    setEmailError('Please enter your email address.');
  }
  else{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  if (!emailRegex.test(email)) {
    setEmailError('Please enter a valid email address.');
    return;
  } 
}

  if(!gusername) {
    setUsernameError('Please enter your Github username.');
  }
  else{
  const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    if (!usernameRegex.test(gusername)) {
      setUsernameError('Invalid Github username format.');
      return;
    }}
    if(!image) {
      setImageError('Please upload an image.');
    }

  if(nameError || emailError || usernameError || imageError) {
    return
  }

    navigate('/ticket', {state: {
      name,
      email,
      gusername,
      image
   }} )

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value) && e.target.value !== "") {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  const handleUsernameChange = (e) => {
    setGusername(e.target.value);    
    const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    if (!usernameRegex.test(e.target.value) && e.target.value !== "") {
      setUsernameError('Invalid Github username format.');
    } else {
      setUsernameError('');
    }

  };
  const handleImageSubmit = (event) => {
    const file = event.target.files[0]

    if (file) {
      if(![ 'image/jpeg', 'image/jpg', ].includes(file.type)) {
        setImageError('Please select a valid image file (JPEG or PNG)')
        return
      }
      
      if (file.size > 500 * 1024) {
        setImageError('Please provide a image not more than 500kb')
        return
      }

     setImage(file)
      setImageError('')
  } }

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{
      height: '100vh'
    }}>
  <Typography variant="h3" component="h1" textAlign= 'center' fontWeight= 'bold' sx={{
    marginBottom: 3
  }}>
  Your Journey to Coding Conf <br/>2025 Starts Here!
  </Typography>
            <Typography variant="h6" component="p" textAlign= 'center'  >
        Secure your spot at next year's biggest coding conference.
        </Typography>
        <FormControl required onSubmit={handleSubmit} sx={{
          display: 'flex',
          alignItem : 'flex-start',
          margin: '0 auto',
          width: '310px',
        }}>
          <Typography variant='body1' sx={{
            marginTop: '40px',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}>Upload Avatar</Typography>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '70px',
            padding: '10px',
            border: '2px dashed white',
            alignItems: 'center'
          }}>
            <Avatar sx={{
              border: '1px solid gray', 
              backgroundColor: theme.palette.transparent.main,
              borderRadius: '5px',
              marginTop: '10px'
            }}>
            {image? (
              <img src={URL.createObjectURL(image)} alt={image.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            ) : (
              <img src={IconSvg} alt='icon' style={{width: 'auto', height: '20px',}} />
            )}
            </Avatar>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center'
              
            }}> 
            <Input id='upload-avatar' type='file' value={image} onChange = {handleImageSubmit} accept=".jpg, .jpeg, .png" inputProps={{
              accept : 'image/jpg, image/jpeg, image/png'}} sx={{display: 'none'}} error = {!!imageError} helperText = {imageError} />
            <Button variant='text' component='label' htmlFor='upload-avatar'  sx={{
              color: theme.palette.white.main,
              fontSize: '16px',
              textTransform: 'inherit',
              '&:hover' : {
                backgroundColor: 'transparent',
              }
            }} > Drag and drop or click to upload</Button >
            </Box>
          </Box>
          <Stack direction= 'row' sx= {{display: 'flex', alignItems:'center', justifyContent:'space-between', marginTop: '10px'}}>
          <img src={InfoSvg} alt='icon' style={{marginRight: '5px', display: 'flex', alignSelf: 'flex-start'}} />
          <Typography variant='caption' color='white'> 
              Upload your photo (JPG or PNG, max size: 500KB).
          </Typography>
          </Stack>
          
          {imageError && <Typography variant='caption' color='error'>{imageError}</Typography>}
          <Stack spacing={2} sx={{
            margin: '10px 0',
            width: '310px'
          }}>
            <Stack>
            <Typography variant='body1'>Full Name</Typography>
            <TextField fullWidth required type='name' value={name}  onChange = {(e) => setName(e.target.value)} autoComplete='on' size='small'
              sx={{
                borderRadius: '5px',
                input: { color: theme.palette.white.main }, 
                '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.white.main}, 
                '& .MuiInputBase-root': {
                   backgroundColor: theme.palette.lightWhite.main,
                   fontSize: '14px',
                },
                '& .MuiOutlinedInput-root': {
                  '&:focus, &:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: `1px solid ${theme.palette.transparent.main}`,  
                      outline: 'none', 
                    },
                    '& .MuiInputBase-root': { 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                     },
                  },
                },
  
  
              }}
              error={!!nameError}
              helperText={nameError}
              />
            </Stack>
            <Stack >
              <Typography variant='body1'>Email Address</Typography>
              <TextField required fullWidth type='email' size='small' value={email} placeholder= 'example@email.com' onChange = {handleEmailChange} autoComplete="on" sx={{
                borderRadius: '5px',
                input: { color: theme.palette.white.main }, 
                '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.white.main}, 
                '& .MuiInputBase-root': {
                   fontSize: '14px',
                   backgroundColor: theme.palette.lightWhite.main,
                },
                '& .MuiOutlinedInput-root': {
                  '&:focus, &:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: `1px solid ${theme.palette.transparent.main}`,  
                      outline: 'none', 
                    },
                    '& .MuiInputBase-root': { 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                     },
                  },
                },
  
  
              }}
              error={!!emailError}
              helperText={emailError}
              />
            </Stack>
            <Stack>
              <Typography variant='body1'>Github Username</Typography>
              <TextField required fullWidth type='string' size='small' value={gusername} placeholder= '@yourusername' onChange = {handleUsernameChange} autoComplete="on" sx={{
                borderRadius: '5px',
                input: { color: theme.palette.white.main }, 
                '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.white.main}, 
                '& .MuiInputBase-root': {
                   fontSize: '14px',
                   backgroundColor: theme.palette.lightWhite.main,
                },
                '& .MuiOutlinedInput-root': {
                  '&:focus, &:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: `1px solid ${theme.palette.transparent.main}`,  
                      outline: 'none', 
                    },
                    '& .MuiInputBase-root': { 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                     },
                  },
                },
              }}
              error = {!!usernameError}
              helperText = {usernameError}
              /> 
            </Stack>
            <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: 'rgb(241, 72, 72)', color: 'rgb(2, 1, 31)', fontWeight: 'bold', textTransform: 'inherit'}}> Generate My Ticket</Button>
          </Stack>
        </FormControl>
    </Container>
    </ThemeProvider>
)}
export default Home