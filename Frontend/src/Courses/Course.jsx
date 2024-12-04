import React, { useEffect, useState } from 'react'
import list from "../components/list.json"
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {

  const [Book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async() => {
      try {
      const res = await axios.get('http://localhost:3000/book');
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 font-poppins md:pt-28 p-20'>
         <div className='items-center justify-center text-center'>
          <h1 className='text-3xl font-semibold md:text-2xl '>
             we are delighted to introduce you to our courses <span className='text-pink-600'> 
             Here! :
             </span>
          </h1>
          <p  className='md:text-xl text-md items-center justify-center text-center my-6'>
            Our courses are designed to help you achieve your goals and improve your skills. We offer a wide
            range of courses, from beginner to advanced levels, in various fields such as technology, business,
            and creative arts.
          </p>
         <Link to="/">
         <button className='bg-pink-500 px-3 py-1 rounded-md text-white w-fit hover:bg-pink-400 hover:text-black duration-300 mt-4' >
             Back
         </button>
         </Link>
         </div>
         <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-2'>
          {
            Book.map((item) => {
              return <Cards key={item.id} item={item} />
          }
          )}
         </div>
    </div>
    </>
  )
}

export default Course