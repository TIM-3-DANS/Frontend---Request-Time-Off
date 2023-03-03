import Login from "./components/login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./containers/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/navbar" element={<Navbar/>}/> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
