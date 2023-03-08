import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {useSelector} from "react-redux"
import Navbar from '../../containers/Navbar'

const Dashboard = () => {
    const {name, email} = useSelector(state => state.user)

    useEffect(()=> {
        getUserInfo()
    },[])

    const getUserInfo = async()=> {
        try {
            const response = await axios.get('http://localhost:5000/users')
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div class="container">
    <Navbar/>
    <div className="box mt-5">
        <h4 className="title is-4">{name} | {email}</h4>
    </div>
    </div>
  )
}

export default Dashboard
