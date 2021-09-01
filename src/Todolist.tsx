import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {Task} from './Task';

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

// export function Todolist(props: PropsType) {
export const Todolist = React.memo(function (props: PropsType) {
        console.log('Todolist called')

        // const addTask = (title: string) => {
        //     props.addTask(title, props.id);
        // }

        let tasksForTodolist = props.tasks;

        if (props.filter === 'active') {
            tasksForTodolist = props.tasks.filter(t => t.isDone === false);
        }
        if (props.filter === 'completed') {
            tasksForTodolist = props.tasks.filter(t => t.isDone === true);
        }


        const addTask = useCallback((title: string) => {
            props.addTask(title, props.id);
        }, [props.addTask, props.id])

        const removeTodolist = () => {
            props.removeTodolist(props.id);
        }
        const changeTodolistTitle = useCallback((title: string) => {
            props.changeTodolistTitle(props.id, title);
        }, [props.changeTodolistTitle, props.id])

        const onAllClickHandler = useCallback(() => props.changeFilter('all', props.id), [props.changeFilter, props.id]);
        const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.id), [props.changeFilter, props.id]);
        const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.id), [props.changeFilter, props.id]);

        return <div>
            <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>
                {
                    tasksForTodolist.map(t =>
                        <Task
                            key={t.id}
                            removeTask = {props.removeTask}
                            changeTaskStatus = {props.changeTaskStatus}
                            changeTaskTitle = {props.changeTaskTitle}
                            todolistId = {props.id}
                            tasks = {t}
                        />)
                }
            </div>
            <div style={{paddingTop: '10px'}}>
                <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                        onClick={onAllClickHandler}
                        color={'default'}
                >All
                </Button>
                <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                        onClick={onActiveClickHandler}
                        color={'primary'}>Active
                </Button>
                <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                        onClick={onCompletedClickHandler}
                        color={'secondary'}>Completed
                </Button>
            </div>
        </div>
    }
)

