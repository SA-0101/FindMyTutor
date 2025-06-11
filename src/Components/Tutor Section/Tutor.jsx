import React from 'react'
import { Outlet } from 'react-router-dom'

function Tutor() {
  return (
    <div>
        Components will render here
        <Outlet/>
    </div>
  )
}

export default Tutor
