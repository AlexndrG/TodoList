import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';

export type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    id: string
    todolistId: string
}

export type AddTaskActionType = {
    type: 'ADD_TASK'
    title: string
    todolistId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE_TASK_STATUS'
    id: string
    isDone: boolean
    todolistId: string
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE_TASK_TITLE'
    id: string
    title: string
    todolistId: string
}


type ActionType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType


export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.id),
            }
        case 'ADD_TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]],
            }
        case 'CHANGE_TASK_STATUS':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.id
                    ? {...t, isDone: action.isDone}
                    : t),
            }
        case 'CHANGE_TASK_TITLE':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.id
                    ? {...t, title: action.title}
                    : t),
            }

        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.todolistId]: []
            }

        case 'REMOVE-TODOLIST':
            const copyState = {...state}
            delete copyState[action.id]
            return copyState



        default:
            return state
    }

}


export const removeTaskAC = (id: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE_TASK', id, todolistId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD_TASK', title, todolistId}
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE_TASK_STATUS', id, isDone, todolistId}
}

export const changeTaskTitleAC = (id: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE_TASK_TITLE', id, title, todolistId}
}
