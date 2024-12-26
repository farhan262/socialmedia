import { Button, Container } from '@mui/material'
import { Box } from '@mui/material';
import AuthForm from '../components/AuthForm/AuthForm'

import React from 'react'

function Authpage() {
  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center", alignItems:"center",marginLeft:20,marginTop:10}} >
        
    <img src="/auth.png"  alt='user img' />
    <Container sx={{display:'flex', alignItems:'center',justifyContent:'center',flexFlow:'column'
    }}>

<AuthForm  />
&nbsp;&nbsp;

Get the App.
<Container sx={{display:"flex",alignItems:'center',flexFlow:'row',justifyContent:'space-around',marginLeft:3}}>
  
 
  <img src='/playstore.png' height={40}/>
<img src='/microsoft.png'height={40} />
</Container>

</Container>
</Box>

    
   
  );
}

export default Authpage
