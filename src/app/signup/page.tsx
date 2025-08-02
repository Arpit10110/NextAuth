"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    const res = await axios.post("api/register/",{name,email,password});
    console.log(res)
  }

  return (
  <>
    <nav>
        <div className='flex my-[1rem] justify-end items-center px-[5rem] gap-[2rem] ' >
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
        </div>
    </nav>
    <div className='flex justify-center items-center ' >
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-[1rem] w-[40%] px-[1rem] py-[2rem] bg-gray-800 mt-[5rem] rounded-[0.5rem] '  action=""> 
         <input onChange={(e)=>setName(e.target.value)} className='w-full  bg-white text-black p-[0.2rem] rounded-[0.3rem] '  type="text" placeholder='Enter the name' required/>
         <input onChange={(e)=>setEmail(e.target.value)} className='w-full  bg-white text-black p-[0.2rem] rounded-[0.3rem] '  type="email" placeholder='Enter the email' required/>
         <input onChange={(e)=>setPassword(e.target.value)} className='w-full  bg-white text-black p-[0.2rem] rounded-[0.3rem] '  type="password" placeholder='Enter the password' required/>
         <button className='  bg-gray-700 px-[3rem] py-[0.3rem] rounded-[0.3rem] text-[1.3rem] cursor-pointer '  type="submit">SignUp</button>   
         <h2>Already have an account? <Link className='text-blue-500' href={"/login"}>Login</Link></h2>
      </form>
    </div>
  </>
  )
}

export default page