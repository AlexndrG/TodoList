import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListID: string
}

export type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}

export type ChangeTodoListTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    todoListID: string
    title: string
}

export type ChangeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    todoListID: string
    value: FilterValuesType
}

export type ActionsType =
    RemoveTodoListAT |
    AddTodoListAT |
    ChangeTodoListTitleAT |
    ChangeTodoListFilterAT

export const todoListsReducer = (todoLists: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todoLists.filter(tl => tl.id !== action.todoListID)

        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: v1(),
                title: action.title,
                filter: 'all'
            };
            return [...todoLists, newTodolist]

        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(tl => tl.id === action.todoListID ? {...tl, title: action.title} : tl)

        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(tl => tl.id === action.todoListID ? {...tl, filter: action.value} : tl)

        default:
            return todoLists
    }
}

export const RemoveTodoListAC = (todoListID: string): RemoveTodoListAT => {
    return {
        type: 'REMOVE-TODOLIST',
        todoListID: todoListID
    }
}

export const AddtodoListAC = (title: string): AddTodoListAT => {
    return {
        type: 'ADD-TODOLIST',
        title: title
    }
}

export const ChangeTodoListTitleAC = (todoListID: string, title: string): ChangeTodoListTitleAT => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        todoListID: todoListID,
        title: title
    }
}

export const ChangeTodoListFilterAC = (todoListID: string, value: FilterValuesType): ChangeTodoListFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todoListID: todoListID,
        value: value
    }
}