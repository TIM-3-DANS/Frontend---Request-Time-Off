import React from 'react'
import Navbar from '../../containers/Navbar'

const HrMenu = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <div className="column is-5-desktop">
        <div class="box">
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Employe</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Waiting for approval</td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
       </div>
    </div>
  )
}

export default HrMenu
