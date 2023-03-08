import React from 'react'
import Navbar from '../../containers/Navbar'
import UserList from './UserList'

const AdminMenu = () => {
  return (
    <div>
        <Navbar/>
    <div className='container'>
      <UserList/>
    </div>
    </div>
  )
}

export default AdminMenu