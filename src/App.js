import Login from "./components/login/Login";
import {Routes, Route} from "react-router-dom"
import Navbar from "./containers/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TimeOffForm from "./components/form/timeOff/TimeOffForm";
import HrMenu from "./components/dashboard/HrMenu";
import AdminMenu from "./components/dashboard/AdminMenu";
import { useState } from "react";
import AddUser from "./components/dashboard/AddUser";




const USER_TYPES = {
  EMPLOYE_USER : "Employe User",
  HR_USER : "Hr User",
  ADMIN_USER : "Admin User"
}

const CURRENT_USER_TYPE = USER_TYPES.EMPLOYE_USER;

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/adduser" element={<AddUser/>}/>  
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/dashboard" element={
      <EmployeElement>   
        <Dashboard/> </EmployeElement>}/>
      <Route path="/timeoff" element={<TimeOffForm/>}/>
      <Route path="/hrmenu" element={<HrElement><HrMenu/></HrElement>}/>
      <Route path="/adminmenu" element={<AdminElement><AdminMenu/></AdminElement>}/> 
      <Route path="*" element={<div>Page is not found!</div>}/>     
   </Routes>
   </div>
  );
}

function EmployeElement({children}){
  return <div>{children}</div>
}


function HrElement({children}){
  if((CURRENT_USER_TYPE === USER_TYPES.HR_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER)){
    return <div>{children}</div>
  }else{
    return <div><Navbar/>
     <div class="container">
      You dont have permission to acces this menu!
      </div></div>
  }
}

function AdminElement({children}){
  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER){
    return <div>{children}</div>
  }else{
    return <div><Navbar/>
     <div class="container">
      You dont have permission to acces this menu!
      </div>
      </div>
  }
}

export default App;
