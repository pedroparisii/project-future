import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[75px] px-12 border-b-[1px] border-[#1f1f1f]'>
        <a href='/' className='font-geistr text-[20px]'>Project Future.</a>
        <Link to="/profile"> <div className='w-[50px] h-[50px] rounded-[50%] border-[2px] border-[#2c2c2c] bg-profile-picture bg-cover'></div> </Link>
    </div>
  )
}

export default Navbar