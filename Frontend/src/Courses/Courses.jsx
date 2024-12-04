import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from './Course'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-slate-900  dark:bg-slate-900 dark:text-slate-100">
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses