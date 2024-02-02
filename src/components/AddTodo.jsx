import React, { useState } from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { RxCrossCircled } from "react-icons/rx";
import { useTodo } from '../context/TodoContextProvider';

const AddTodo = () => {
    const {todosList,handleAddTodo} = useTodo();
    const [todo,setTodo] = useState({
        title: '',
        status: false
    })
    const [isVisible,setIsVisible] = useState(false);
    const handleModalClose = (e) => {
        if(e.target.id === 'modal')setIsVisible(false);
        return;
    }
    
    const handleStatusChange = (e) => {
        setTodo({...todo,status: e.target.value === 'complete' ? true : false})
    }

    const handleAddNewTodo = (e) => {
        e.preventDefault();
        if(todo.title.length === 0)return;
        const newTodo = {
            id: todosList.length+1,
            title: todo.title,
            status: todo.status,
            duration: '02:32 AM, 02/02/2024'
        }
        handleAddTodo(newTodo);
        setTodo({
            title: '',
            status: false
        })
        setIsVisible(false)
    }

  return (
    <div>
        <button onClick={() => setIsVisible(true)}  className="bg-[#646ff0] px-4 py-2 rounded-lg text-lg hover:bg-[#848cdc] font-semibold text-white">Add Todo</button>
        <div onClick={handleModalClose} id='modal' className={`fixed bg-black inset-0 bg-opacity-50 backdrop-blur-[2px] z-[1] justify-center items-center ${isVisible ? 'flex' : 'hidden'}`}>
            <form onSubmit={handleAddNewTodo} className='relative bg-gray-200 rounded-lg text-gray-600 p-4 flex flex-col lg:w-[500px] md:w-[400px] w-[300px] lg:h-[400px] md:h-[300px] h-[300px] justify-between'>
                <RxCrossCircled onClick={() => setIsVisible(false)} size={30} className='absolute top-0 right-0 m-2 cursor-pointer text-[#5966f7]' />
                <h1 className='text-center font-bold text-xl md:text-2xl lg:text-3xl font-serif'>Enter a New Todo</h1>
                <div className='m-2 space-y-1'>
                    <p className='font-serif text-lg'>Title</p>
                    <input value={todo.title} onChange={(e) => setTodo({...todo,title: e.target.value})} type="text" required placeholder='Title' className='px-4 py-2 rounded-lg text-lg w-[200px] md:w-[300px] lg:w-[400px] focus:outline-1 focus:outline-[#abb2ff]'/>
                    <p className='font-serif text-lg'>Status</p>
                    <div className="relative inline-flex items-center px-4 py-1 bg-white rounded-lg">
                        <select value={todo.status ? 'complete' : 'incomplete'} onChange={handleStatusChange} className="appearance-none bg-transparent border-none text-gray-700 py-2 pl-3 pr-9 rounded-md leading-tight focus:outline-none focus:shadow-outline font-bold font-serif ">
                            <option value="incomplete">Incomplete</option>
                            <option value="complete">Complete</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <RiArrowDropDownLine size={30} className={`text-[#616eff]`}/>          
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    {/* Add button */}
                    <button onClick={handleAddNewTodo} className="bg-[#646ff0] px-4 py-2 rounded-lg text-lg hover:bg-[#848cdc] font-semibold text-white my-4">Add Todo</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTodo