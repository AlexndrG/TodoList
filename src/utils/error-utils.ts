import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/app-reducer';
import {Dispatch} from 'react';
import {ResponseType} from '../api/todolists-api'

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<ErrorUtilsDispatchType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}


export const handleServerNetworkError = (dispatch: Dispatch<ErrorUtilsDispatchType>, message:string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

type ErrorUtilsDispatchType = SetAppErrorActionType | SetAppStatusActionType

