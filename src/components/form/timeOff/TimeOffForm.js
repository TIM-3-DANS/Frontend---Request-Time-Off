import React from 'react'
import Navbar from '../../../containers/Navbar'

const TimeOffForm = () => {
  return (
    <div class="container">
    <Navbar/>
        
        <div className="hero body">
        <div class="columns">
        <div className="column is-7-desktop">
        <div class="box">
        <input class="input" type="text" placeholder="Judul"/>
        <textarea class="textarea" placeholder="Masukan Alasan Cuti"></textarea>
        <div className="column is-3-desktop">
            <div class="columns">
               <div class="column">
        <input type="date" class="input" id="date" name="date" value="2019-10-22"/>
        </div> 
        <div class="column">
        -
        </div> 
        <div class="column">
        <input type="date" class="input" id="date" name="date" value="2019-10-22"/>
        </div> 
        </div>
        </div>
        <a class="button is-success">Submit Form</a>
        </div>
        </div>

        <div className="column is-5-desktop">
        <div class="box">
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul Form</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pengajuan Cuti</td>
                        <td>Pending</td>
                        <td>
                            <button className='button is-success'>Check</button>
                            <button className='button is-danger'>Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pengajuan Cuti</td>
                        <td>Approved</td>
                        <td>
                            -
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default TimeOffForm
