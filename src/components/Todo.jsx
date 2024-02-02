import React, { useState } from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdEdit,
    MdDelete,
    MdOutlineDownloadDone
  } from "react-icons/md";
import { useTodo } from '../context/TodoContextProvider';

const Todo = ({id,title,status}) => {
    const {handleTodoStatusChange,handleTodosEdit,handleTodosDeletion} = useTodo();
    const [isCompleted,setIsCompleted] = useState(status)
    const [iseEditable,setIsEditable] = useState(false);
    const [todoTitle,setTodoTitle] = useState(title);

    const handleStatusChange = () => {
        setIsCompleted(prev => !prev);
        handleTodoStatusChange(id);
    }

    const handleTodoEdit = () => {
        setIsEditable(prev => !prev);
        handleTodosEdit(id,todoTitle);
    }
    
    const handleTodoDeletion = () => {
        handleTodosDeletion(id);
    }

  return (
    <div className='rounded-md my-1 p-2 bg-white text-[#585858] flex items-center justify-between'>
        {/* Title and Checkbox */}
        <div className='flex items-center space-x-1 cursor-pointer'>
            {/* Checkbox */}
            <div onClick={handleStatusChange}>
                {
                    isCompleted ? <MdCheckBox size={25} className='text-[#616eff]'/> : <MdCheckBoxOutlineBlank size={25} />
                }
            </div>
            <div className='flex flex-col justify-center'>
                <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} type="text" className={`bg-gray-200 rounded-md px-2 py-1 text-xs w-[180px] md:w-[300px] lg:w-[400px] focus:outline-1 focus:outline-[#abb2ff] ${!iseEditable && 'hidden'}`}/>
                <p className={`text-md ${isCompleted && 'line-through text-[#616eff]'} ${iseEditable && 'hidden'}`}>{todoTitle}</p>
                <p className='text-xs text-gray-500'>03:19 AM, 02/02/2024</p>
            </div>
        </div>
        {/* Edit and delete */}
        <div className='flex items-center space-x-1'>
            <div onClick={handleTodoEdit} className='bg-[#dedfe1] text-[#616eff] rounded p-2 cursor-pointer'>
                {
                    iseEditable ? <MdOutlineDownloadDone size={25} className='text-green-500' /> : <MdEdit size={25} />
                }
            </div> 
            <div onClick={handleTodoDeletion} className='bg-[#dedfe1] text-red-500 rounded p-2 cursor-pointer'>
                <MdDelete size={25} />
            </div>       
        </div>
    </div>
  )
}

export default Todo