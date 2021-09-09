import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from './Task';
import {TaskType} from './Todolist';

const changeTaskStatusCallback = action('changeTaskStatus clicked')
const changeTaskTitleCallback = action('changeTaskTitle clicked')
const removeTaskCallback = action('removeTask clicked')


export default {
    title: 'TODOLIST/Task',
    component: Task,
    args: {
        changeTaskStatus: changeTaskStatusCallback,
        changeTaskTitle: changeTaskTitleCallback,
        removeTask: removeTaskCallback,
    }
} as ComponentMeta<typeof Task>;

const TaskTemplate: ComponentStory<typeof Task> = (args) => <Task {...args} />;

// const changeTaskStatusCallback = action('changeTaskStatus clicked')
// const changeTaskTitleCallback = action('changeTaskTitle clicked')
// const removeTaskCallback = action('removeTask clicked')

// const baseArgs = {
//     changeTaskStatus: changeTaskStatusCallback,
//     changeTaskTitle: changeTaskTitleCallback,
//     removeTask: removeTaskCallback,
// }

export const TaskIsDoneStory = TaskTemplate.bind({});
TaskIsDoneStory.args = {
    // changeTaskStatus: action('changeTaskStatus clicked'),
    // changeTaskTitle: action('changeTaskTitle clicked'),
    // removeTask: action('removeTask clicked'),
/*    ...baseArgs,*/
    task: {id: '1', title: 'JS', isDone: true},
    todolistId: 'todo1',
};

export const TaskIsNotDoneStory = TaskTemplate.bind({});
TaskIsNotDoneStory.args = {
    // changeTaskStatus: action('changeTaskStatus clicked'),
    // changeTaskTitle: action('changeTaskTitle clicked'),
    // removeTask: action('removeTask clicked'),
/*    ...baseArgs,*/
    task: {id: '1', title: 'JS', isDone: false},
    todolistId: 'todo1',
};
