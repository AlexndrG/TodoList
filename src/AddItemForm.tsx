import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {AddBox} from '@material-ui/icons';
import {IconButton, TextField} from '@material-ui/core';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        {/*<input value={title}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*       onKeyPress={onKeyPressHandler}*/}
        {/*       className={error ? "error" : ""}*/}
        {/*/>*/}
        <TextField
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? 'error' : ''}
            label={'Title'}
            variant={'outlined'}
            error={!!error}
            helperText={error}
            size={'small'}
        />

        {/*<button onClick={addItem}>+</button>*/}
        <IconButton
            onClick={addItem}
            color={'primary'}
            size={'small'}>
            <AddBox fontSize={'large'}/>
        </IconButton>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
