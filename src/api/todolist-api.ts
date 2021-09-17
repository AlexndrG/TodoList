import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3'
    }
})

export const todolistApi = {
    getTodos() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    },

    //=======================================================

    getTasks(todolistId: string) {
        return instance.get<GetTaskType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<CommonResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId:string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId:string, taskDataOut: TaskDataOutType) {
        return instance.put<CommonResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks/${taskId}`, taskDataOut)
    },

}

//=======================================================

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTaskType = {
    items: Array<TaskType>
    totalCount: number
    error: string
}


// type CreateTaskType = {
//     data: {
//         item: TaskType
//     }
//     resultCode: number
//     messages: Array<string>
// }
//
// type DeleteTaskType = {
//     data: {}
//     resultCode: number
//     messages: Array<string>
// }
//
// type UpdateTaskType = {
//     data: {
//         item: TaskType
//     }
//     resultCode: number
//     messages: Array<string>
// }



export type TaskDataOutType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}



//=======================================================

type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

// type CreateTodoResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodoType
//     }
// }

// type DeleteAndUpdateTodoResponseType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }