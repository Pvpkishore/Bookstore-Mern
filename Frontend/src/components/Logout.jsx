import React from 'react'
import { useAuth } from '../Context/Authprovider'
import toast from 'react-hot-toast'


const Logout = () => {
    const [authuser, setauthUser] = useAuth()

    const handlelogout =()=>{
        try {
          setauthUser({ 
           ...authuser,
           user:null
        });
        localStorage.removeItem("Users")
        toast.success("Logout successfully")
        setTimeout(()=>{
            window.location.reload();
        },500)

        } catch (error) {
            toast.error("Error: "+error.message)
        }
    }
  return (
    <div>
  <button  className="bg-red-500  text-white px-3 py-1 md:py-2 rounded-md hover:bg-red-400 duration-300 cursor-pointer"   
  onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout