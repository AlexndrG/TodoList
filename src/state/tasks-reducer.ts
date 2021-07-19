import {TasksStateType} from '../App';
import {v1} from 'uuid';

type RemoveTaskActionType = {
    type: 'remove-task'
    id: string
    todolistId: string
}

type AddTaskActionType = {
    type: 'add-task'
    title: string
    todolistId: string
}

type ChangeTaskStatusActionType = {
    type: 'change-task-status'
    id: string
    isDone: boolean
    todolistId: string
}


type ChangeTaskTitleActionType = {
    type: 'change-task-title'
    id: string
    newTitle: string
    todolistId: string
}

//==========================================================================================================

type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    todolistId: string
}


type ActionsType =
    RemoveTaskActionType |
    AddTaskActionType |
    ChangeTaskStatusActionType |
    ChangeTaskTitleActionType |
    AddTodolistActionType |
    RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'remove-task': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.id)
            }
        }

        case 'add-task': {
            return {
                ...state,
                [action.todolistId]: [
                    {id: v1(), title: action.title, isDone: false},
                    ...state[action.todolistId]
                ]
            }
        }

        case 'change-task-status': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task =>
                    task.id === action.id
                        ? {...task, isDone: action.isDone}
                        : task
                )
            }
        }

        case 'change-task-title': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task =>
                    task.id === action.id
                        ? {...task, title: action.newTitle}
                        : task
                )
            }
        }

        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }

        case 'REMOVE-TODOLIST': {
            const newState = {...state}
            delete newState[action.todolistId]
            return newState
        }


        default:
            return state
    }

}

export const removeTaskAC = (id: string, todolistId: string): RemoveTaskActionType => {
    return {
        type: 'remove-task',
        id,
        todolistId
    }
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {
        type: 'add-task',
        title,
        todolistId
    }
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {
        type: 'change-task-status',
        id,
        isDone,
        todolistId
    }
}

export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string): ChangeTaskTitleActionType => {
    return {
        type: 'change-task-title',
        id,
        newTitle,
        todolistId
    }
}

//============================================================================================================

// export const AddTodolistAC = (title: string): AddTodolistActionType => {
//     return {
//         type: 'ADD-TODOLIST',
//         title,
//         todolistId: v1()
//     }
// }


export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        todolistId
    }
}