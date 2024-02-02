import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { useTodo } from '../context/TodoContextProvider'

const DropDown = () => {
    const {userView,setUserView} = useTodo();

    const handleOptionChange = (e) => {
        setUserView(e.target.value);
    }
  return (
        <div className="relative inline-flex items-center px-4 py-1 bg-gray-200 rounded-lg">
            <select value={userView} onChange={handleOptionChange} className="appearance-none bg-transparent border-none text-gray-700 py-2 pl-3 pr-9 rounded-md leading-tight focus:outline-none focus:shadow-outline font-bold font-serif ">
                <option value="all" className=''>All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <RiArrowDropDownLine size={30} className={`text-[#616eff]`}/>          
            </div>
        </div>
  )
}

export default DropDown