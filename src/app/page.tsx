import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'

const page = async() => {

  const user = await auth()
  console.log(user)

  return (
    <>
      <nav>
        <div className='flex my-[1rem] justify-end items-center px-[5rem] gap-[2rem] ' >
          <Link href={"/"}>Home</Link>
          <Link href={"/login"}>Login</Link>
        </div>
      </nav>
    </>
  )
}

export default page