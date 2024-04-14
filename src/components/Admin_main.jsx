import React from 'react'
import Admin_Nav from './Admin_Nav'

const Admin_main = (props) => {
  return (
    <div>
        <Admin_Nav/>
       {props.child}
    </div>
  )
}

export default Admin_main