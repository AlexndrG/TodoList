import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, IconButton, Checkbox} from '@material-ui/core';
import {Delete} from '@material-ui/icons';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            {/*<button onClick={removeTodolist}>x</button>*/}
            <IconButton
                onClick={removeTodolist}
                // color={'primary'}
                style={{color: 'black'}}
                size={'small'}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul style={{listStyle: 'none', padding: '1px'}}>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }


                    return <li key={t.id}>
                        {/*<input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>*/}
                        <Checkbox
                            onChange={onChangeHandler}
                            checked={t.isDone}
                            size={'small'}
                            color={'primary'}
                        />

                        <span className={t.isDone ? 'is-done' : ''}>
                            <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
                        </span>

                        {/*<button onClick={onClickHandler}>x</button>*/}
                        <IconButton
                            onClick={onClickHandler}
                            color={'primary'}
                            size={'small'}>
                            <Delete fontSize={'small'}/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button
                // className={props.filter === 'all' ? 'active-filter' : ''}
                color={props.filter === 'all' ? 'primary' : 'secondary'}
                variant={'contained'}
                size={'small'}
                onClick={onAllClickHandler}>All </Button>
            <Button
                style={{margin: '1px'}}
                // className={props.filter === 'active' ? 'active-filter' : ''}
                color={props.filter === 'active' ? 'primary' : 'secondary'}
                variant={'contained'}
                size={'small'}
                onClick={onActiveClickHandler}>Active </Button>
            <Button
                // className={props.filter === 'active' ? 'active-filter' : ''}
                color={props.filter === 'completed' ? 'primary' : 'secondary'}
                variant={'contained'}
                size={'small'}
                onClick={onCompletedClickHandler}>Completed </Button>
        </div>
    </div>
}


