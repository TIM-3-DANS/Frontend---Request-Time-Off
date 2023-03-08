import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
  return (
       
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
        <Link to="/adduser" className='button is-success'>Add User</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>johndoe@gmail.com</td>
                    <td>Admin</td>
                    <td>
                        <button className='button is-success'>Edit</button>
                        <button className='button is-danger'>Delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default UserList
