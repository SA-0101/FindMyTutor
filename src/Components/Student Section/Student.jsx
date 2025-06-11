import React from 'react'
import { Outlet } from 'react-router-dom'

function Student() {
  return (
    <div>
        Components will Render Here

        <Outlet/>
    </div>
  )
}

export default Student
