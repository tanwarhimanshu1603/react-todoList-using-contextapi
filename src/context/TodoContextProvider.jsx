import React,{createContext, useContext, useEffect, useState} from 'react'

const TodoContext = createContext(null);

export const useTodo = () => {
    const todoContext = useContext(TodoContext);
    return todoContext;
}

const TodoContextProvider = (props) => {

    const [userView,setUserView] = useState('all');
    const [todosList,setTodosList] = useState(() => {
        const storedList = localStorage.getItem('todos');
        return JSON.parse(storedList) || [];
    })

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todosList));
    },[todosList])

    const handleAddTodo = (newTodo) => {
        const updatedTodosList = [newTodo,...todosList];
        setTodosList(updatedTodosList);
    }

    const handleTodoStatusChange = (todoId) => {
        const updatedTodosList = todosList.map(todo => {
            if(todo.id === todoId)return {...todo,status: !todo.status};

            return todo;
        })
        setTodosList(updatedTodosList);
    }

    const handleTodosEdit = (todoId,updatedTitle) => {
        const updatedTodosList = todosList.map(todo => {
            if(todo.id === todoId) return {...todo,title: updatedTitle};
            return todo;
        })
        setTodosList(updatedTodosList);
    }

    const handleTodosDeletion = (todoId) => {
        const updatedTodosList = todosList.filter(todo => todo.id !== todoId);
        setTodosList(updatedTodosList);
    }

  return (
    <TodoContext.Provider value={{todosList,setTodosList,handleAddTodo,userView,setUserView,handleTodoStatusChange,handleTodosEdit,handleTodosDeletion}}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider