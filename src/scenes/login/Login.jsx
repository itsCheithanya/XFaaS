import React from 'react'
import '@passageidentity/passage-elements/passage-auth'
import ResponsiveAppBar from '../../components/Login-app-bar'

const Login=()=> {

  return (
    <>
  <ResponsiveAppBar/>
    <div className='container'>
       <div >
       <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
       </div>
    </div>

    </>
  )
}

export default Login
