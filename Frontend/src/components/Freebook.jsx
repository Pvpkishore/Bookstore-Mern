import React from 'react'
import { useEffect,useState } from 'react';
import list  from './list.json'
import Cards  from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"

const Freebook = () => {
  const [Book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async() => {
      try {
      const res = await axios.get('http://localhost:3000/book');
      const FilterData = res.data.filter(item => item.price === 0)
      setBook(FilterData)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-9 mt-16 md:mt-30' >
    <div>
      <h1 className='text-2xl font-semibold'>Free Offered Books</h1>
      <p> Here are some free books offered by our authors</p>
      </div>
      <div className="slider-container">
      <Slider {...settings}>
        {Book.map(item =>(
            <Cards
            item={item}
            key={item.id}
            />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook