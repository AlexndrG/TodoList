import React, {useEffect, useState} from 'react'
import {TaskDataOutType, todolistApi} from '../api/todolist-api';

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

//=======================================================

// const todolistId = '179f911c-3c96-457b-9678-1ff71c078a47'
// const todolistId = '2613f771-ba91-4b12-9bd7-f52facd3abd8'
// const todolistId = '95a3774d-f4b0-4490-8f3b-d24b841c2a8d'
const todolistId = '4b726193-27b6-4eba-8432-74a7cf7cd84d'

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTasks(todolistId)
            .then(response => setState(response.data))
    }, [])

    return <div> {JSON.stringify(state)} </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Task1 = REACT'
        todolistApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = '84e60718-76e1-4128-8faa-143b05ca5adc'
        todolistApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = 'bfc6afd3-aa70-48f8-b6eb-2a314c90a44a'
        const updateTaskData: TaskDataOutType = {
            completed: true,
            deadline: '2021-09-17',
            description: 'New description',
            priority: 111,
            startDate: '2021-09-17',
            status: 7777777,
            title: '===New Title===',
        }

        todolistApi.updateTask(todolistId, taskId, updateTaskData)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
