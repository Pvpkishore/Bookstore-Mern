import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import eyeimgopen from '../assets/icons8-eye-60.png'
import eyeimgclose from '../assets/eye-password-hide.256x256.png'
import { useState } from 'react';

const Login = () => {

    const [PasswordVisible,setPasswordVisible]=useState(false);

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();
   
    const showpasswordeye = ()=>{
        setPasswordVisible(!PasswordVisible);
    }

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        try {
            const response = await axios.post("http://localhost:3000/user/login", userInfo);
            if (response.data) {
                console.log(response.data);
                toast.success('Loggedin successfully');
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(response.data.user));
                }, 400)
            }
        }
        catch (error) {
            if (error.response) {
                console.error(error);
                toast.error("Error: " + error.response.data.message);
                setTimeout(() => { }, 3000)
            }
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-slate-50 dark:bg-slate-800 md:w-96 text-sm md:text-md">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog"  >
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/" className="btn btn-sm btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg text-center text-pink-500 mb-4">Login</h3>
                        <div className='flex flex-col gap-3'>
                            <span className="self-start" >Email</span>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-100 text-black rounded-md p-2"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600 justify-start text-sm'>This field is required</span>}
                            <span className="self-start">Password</span>
                            <div className='relative'>
                                <input
                                    type={PasswordVisible ? "text" : "password"} 
                                    placeholder="Enter your password"
                                    className=" bg-slate-100 text-slate-950 rounded-md p-2 w-full"
                                    {...register("password", { required: true })}
                                /><span className='absolute right-[6px] top-[8px] cursor-pointer' onClick={showpasswordeye}>
                                    <img  className='p-1 hover:bg-slate-200 hover:rounded-full'
                                    src={PasswordVisible ? eyeimgopen : eyeimgclose}
                                    style={{ width: 22 }} alt="eye"></img>
                                </span>
                            </div>
                            {errors.password && <span className='text-red-600 justify-start'>This field is required</span>}
                            <div className="flex flex-col space-y-2 items-center">
                                <button className="bg-pink-600 text-white rounded-md cursor-pointer md:px-36 px-24 py-3 md:py-3  hover:bg-pink-500 duration-300">Login</button>
                                <p>Not registerd?{""}<Link to="/signup" className="hover:underline text-blue-500 cursor-pointer">Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login