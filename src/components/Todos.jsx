import React from 'react'
import Todo from './Todo'
import { useTodo } from '../context/TodoContextProvider'
import EmptyToDo from './EmptyTodo';

const Todos = () => {
    const {todosList,userView} = useTodo();
    const getUserSpecificTodosList = () => {
        if(userView === 'all')return todosList;
        else if(userView === 'incomplete')return todosList.filter(todo => !todo.status);

        return todosList.filter(todo => todo.status);
    }
    const finalTodosList = getUserSpecificTodosList();
  return (
    <div className='bg-[#dedfe1] lg:w-[700px] md:w-[500px] w-[348px] mt-5 px-2 py-5 rounded-lg flex flex-col justify-center'>
        {
            finalTodosList.length === 0 ? <EmptyToDo /> : 
            finalTodosList.map(({id,title,status}) => <Todo key={id} id={id} title={title} status={status} />)
        }
        
    </div>
  )
}

export default Todos