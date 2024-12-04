import React from 'react'
import booksimg from '/Banner.png'

const Banner = () => {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col-reverse md:flex-row">
                <div className='w-full md:w-1/2 md:mt-36 mt-5 px-3'>
                    <h1 className='md:text-5xl text-2xl font-bold'>
                        Hello this is my book  store
                        <span className='text-pink-500'> Bookstore</span>
                    </h1>
                    <p className='md:text-2xl text-md mt-3'>

                        Welcome to my book store, where you can find a wide variety of books to suit your interests
                    </p>
                    <div className='md:mt-4 mt-2'>
                    <label className="input input-bordered flex items-center gap-2 bg-slate-100 dark:bg-slate-800 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-active btn-secondary mt-7">Secondary</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:mt-32 mt-16 md:ml-10 md:pl-8'>
                    <img className='w-56 md:w-auto place-self-center' src={booksimg} alt="books"></img>
                </div>
            </div>
            
        </>
    )
}
 
export default Banner