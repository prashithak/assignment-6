import React from 'react'
import Navbar from './Navbar'
import View from './View'

export const Main = (props) => {
  return (
    <div>
        <Navbar/>
       {props.child}
    </div>
  )
}
