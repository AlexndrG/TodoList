import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AppWithRedux from './AppWithRedux';
import {Provider} from 'react-redux';
import {store} from './state/store';
import {ReduxStoreProviderDecorator} from './stories/ReduxStoreProviderDecorator';

export default {
    title: 'TODOLIST/AppWithRedux',
    decorators: [ReduxStoreProviderDecorator],
    component: AppWithRedux,
} as ComponentMeta<typeof AppWithRedux>;

const AppWithReduxTemplate: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux />;

export const AppWithReduxStory = AppWithReduxTemplate.bind({});
// AppWithReduxStory.args = {};
