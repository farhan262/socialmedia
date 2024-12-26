import React, { useState } from 'react'
import { Box, Button, Container, TextareaAutosize, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AuthForm () {
  const[isLogin,setIsLogin] =useState(true);
  const navigate = useNavigate()
  const [inputs,setInputs] = useState({
    email:"",
    password:"",
    confirmpassword:""
  })
  const handleAuth = () =>{
    if(!inputs.email || !inputs.password){
      alert("please fill all fields")
      return;
    }
    navigate("/")
  }
  return (
    <>
    <Box sx={{ border:"1px solid gray", borderRadius:4, padding:5, display:'flex', flexDirection:'column',marginLeft:5}} >
      <img src='logo.png'height={50} cursor={'pointer'} alt='media image'/>
      <input placeholder='Email Address' type='email' 
      value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})}
      />
      &nbsp;
      <input placeholder='password' type='password'
       value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}
      />
      &nbsp;
      {!isLogin ? <input placeholder='confirm password' type='password' 
       value={inputs.confirmpassword} onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})}
      /> : null}
      &nbsp;
   <Button sx={{background:'blue',justifyContent:'center'}} onClick={handleAuth} >
    
    {isLogin ? "Log in" : "Sign up"}
   </Button>
   <Container sx={{margin:1, alignItems:'center',justifyContent:'center',marginLeft:5}}> OR</Container>
   <Box sx={{alignItems:'center',cursor:'pointer',justifyContent:'center'}}>
    <img src='/google.png'height={25} />
    <div >Log in with Google</div>
   </Box>
    </Box>
&nbsp; 
    <Box sx={{border:'1px solid gray',borderRadius:4,padding:2,marginLeft:5}}>
      <Container sx={{alignItems:'center',justifyContent:'center'}}>
<Box>
  {isLogin ? "Don't Have an Account ?" : "Already have an Account"}
</Box>
<Box onClick={()=>setIsLogin(!isLogin)} sx={{color:'blue',cursor:'pointer'}}>
{isLogin ? "Log in" : "Sign up"}
</Box>
      </Container>

    </Box>
    </>
  )
}

export default AuthForm;
