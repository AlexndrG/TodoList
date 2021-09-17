import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)

        todolistApi.getTodos()
            .then(response => setState(response.data))

    }, [])

    return <div> {JSON.stringify(state)} </div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Todolist1'
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
        todolistApi.createTodo(title)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '8bea4c92-155d-47bc-b390-3fa43f8ee910';
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '110ae581-8f2c-4ac1-aa42-8d06d0c314bc'
        const title = 'REACT>>>>>>>>>'
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
        todolistApi.updateTodoTitle(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
