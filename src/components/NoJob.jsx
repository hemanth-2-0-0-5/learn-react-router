import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const NoJob = () => {

    const error = useRouteError();
    const navigate = useNavigate();

  return (
    <div>
        <h1>An Error Occured! </h1>
        <p>{error.message}</p>
        <button onClick={()=>{navigate('/')}}>Go to Home</button>
    </div>
  )
}

export default NoJob