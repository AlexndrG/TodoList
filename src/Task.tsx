import React, {ChangeEvent} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import {EditableSpan} from './EditableSpan';
import {Delete} from '@material-ui/icons';
import {TaskType} from './Todolist';


type TaskPropsType = {
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
    task: TaskType
}

export const Task = React.memo((props: TaskPropsType) => {
    console.log('Task')

    const onClickHandler = () => props.removeTask(props.task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked);
    }
    const onTitleChangeHandler = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    }


    return <div key={props.task.id} className={props.task.isDone ? 'is-done' : ''}>
        {console.log('div')}
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})