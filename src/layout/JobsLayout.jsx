import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h1>Jobs Opening</h1>
        <p>List of jobs opening in out Company</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout