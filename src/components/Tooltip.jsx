import React, { useState } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";

const Tooltip = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <FaRegQuestionCircle className=' ml-2 text-[18px]'/>
        {isVisible && <div className="bg-[#fff] border-[1px] border-[#3a3a3a] text-black fixed p-2 rounded-[5px] md:m-2 mt-2 mr-4 ml-[-35px] text-[14px]">{text}</div>}
    </div>
  )
}

export default Tooltip