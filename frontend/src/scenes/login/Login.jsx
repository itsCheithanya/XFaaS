import React from 'react'
import '@passageidentity/passage-elements/passage-auth'
import ResponsiveAppBar from '../../components/Login-app-bar'
import { useMode } from '../../theme'
import {ThemeProvider} from "@mui/material"
const Login=()=> {
    const [theme]=useMode();

    return(
    <ThemeProvider theme={theme}>
  <ResponsiveAppBar/>
    <div className='container'>
       <div >
       <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
       </div>
    </div>
</ThemeProvider>
    
  )
}

export default Login