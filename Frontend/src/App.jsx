import React from 'react'
import Home from './Home/Home'
import Courses from '../src/Courses/Courses'
import {Navigate, Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast'
import { useAuth } from './Context/Authprovider';


function App() {
  const [authuser, setauthUser] = useAuth();
  return (
    <>
    <div className= "bg-white text-slate-900  dark:bg-slate-900 dark:text-slate-100"> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={ authuser ? <Courses/> : <Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Toaster />
    </div>
    </>
  );
}

export default App
