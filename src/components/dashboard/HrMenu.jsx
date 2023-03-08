import React from 'react'
import Navbar from '../../containers/Navbar'

const HrMenu = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <div class="columns">
        <div className="column is-6-desktop">
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
                            <button className='button is-success'>Check</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        {/* <div className="column is-5-desktop">
        <div class="box">
        <input class="input" type="text" placeholder="Judul"/>
        <textarea class="textarea" placeholder="Masukan Alasan Cuti"></textarea>
        <input class="input" type="text" placeholder="Tanggal Cuti"/>
        </div>
        <a class="button is-success">Approve</a>
        <a class="button is-danger">Decline</a>
        </div> */}
       </div>
       </div>
    </div>
  )
}

export default HrMenu
