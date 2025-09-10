import React from 'react'
import Services from '../pages/Services'
import { Outlet } from 'react-router-dom'

function ServiceLayout() {
  return (
    <>
        <Services />
        <Outlet />
    </>
  )
}

export default ServiceLayout