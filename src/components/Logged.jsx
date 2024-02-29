import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdExit } from "react-icons/io";

const Logged = () => {
  return (
    <div className='flex justify-between items-center h-[75px] px-12 border-b-[1px] border-[#1f1f1f]'>
        <a href='/' className='font-geistr text-[20px]'>Project Future.</a>
        <Link to="/"> <div className='px-2 h-[35px] rounded-md border-[1px] bg-[#ff36364d] border-[#ff4d4d6e] flex justify-center items-center text-white text-[14px] font-geistr'>Exit <IoMdExit className='text-[18px] ml-[6px]'/></div> </Link>
    </div>
  )
}

export default Logged