import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';
import eyeimgopen from '../assets/icons8-eye-60.png'
import eyeimgclose from '../assets/eye-password-hide.256x256.png'

const Signup = () => {

    const [PasswordVisible,setPasswordVisible]=useState(false);

useEffect(()=>{
    // toast.custom(<div className='bg-slate-100 text-slate-950  p-2 rounded-md duration-500'>Signup to access course books</div>);
    toast('Signup to access course content');
},[500])

const showpasswordeye = ()=>{
    setPasswordVisible(!PasswordVisible);
}


const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        try {
            const response = await axios.post("http://localhost:3000/user/signup", userInfo);
            if (response.data) {
                console.log(response.data);
                toast.success("Signup successfull");
                setTimeout(() => {
                      window.location.href = "/"
                }, 1000);
            };

            localStorage.setItem("Users", JSON.stringify(response.data.user));
        }
        catch (error) {
            if (error.response) {
                console.error(error);
                toast.error("Error: " + error.response.data.message);
            }
        }
    };

    return (
        <div className='flex h-screen items-center justify-center font-poppins'>
            <div>
                <div className="modal-box bg-slate-50 dark:text-white dark:bg-slate-800 px-6 py-4 md:py-8 rounded-lg shadow-md md:w-auto md:text-base text-sm m-4">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-xl text-center text-pink-500 mb-4">Signup</h3>
                        <div className='flex flex-col gap-3'>
                            <span className="self-start font-semibold">Full Name</span>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Enter your Name"
                                className="bg-slate-200 rounded-md p-2"
                                {...register("fullname", { required: true })} />
                            {errors.fullname && <span className="text-red-600 text-sm">This field is required</span>}
                            <span className="self-start font-semibold">Email</span>
                            <input type="email"
                                placeholder="Enter your email"
                                className="bg-slate-200 rounded-md p-2"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                            <span className="self-start font-semibold">Password</span>
                            <div className='relative'>
                            <input
                             type={PasswordVisible ?"text":"password"}
                                placeholder="Enter your password"
                                className="bg-slate-200 text-black rounded-md p-2 w-full"
                                {...register("password", { required: true })} />
                                <span className='absolute right-[6px] top-[8px] cursor-pointer' onClick={showpasswordeye}>
                                    <img  className='p-1 hover:bg-slate-200 hover:rounded-full'
                                    src={PasswordVisible ? eyeimgopen : eyeimgclose}
                                    style={{ width: 22 }} alt="eye"></img>
                                </span>
                                </div>
                            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                            <div className="flex flex-col space-y-2 items-center md:my-2">
                                <button className="bg-pink-600 text-white rounded-md cursor-pointer md:px-36 px-24 py-3 md:py-3  hover:bg-pink-500 duration-300">Signup</button>
                                <p>Have account?{""}
                                    <button className="hover:underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                                        Login
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default Signup