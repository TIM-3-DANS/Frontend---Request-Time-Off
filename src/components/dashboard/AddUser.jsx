import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form action="">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className='input' placeholder='name'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className='input' placeholder='email'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Role</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select>
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <Link to="/adminmenu" type='sumit' className='button is-success'>Create</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddUser
