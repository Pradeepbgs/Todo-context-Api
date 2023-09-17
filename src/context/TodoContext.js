import {useContext, createContext} from 'react'

export  const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "ojjs",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}