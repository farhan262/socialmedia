import { Container,Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
  return (
    <Container>
        {pathname !== '/auth' ? (
            <Box sx={{base:'70px',md:"240px"}}>
            <Sidebar />
        </Box>
        ) : null}
      <Box
  sx={{
    flex: 1,
    width: {
      base: 'calc(100% - 70px)',  // For small screens
      md: 'calc(100% - 240px)',   // For medium and larger screens
    },
    mx: 'auto',  // Centers the Box horizontally
  }}
>
        {children}
      </Box>
    </Container>
  )
}

export default PageLayout
