import React from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField,
    Button
} from '@material-ui/core';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from './auth-reducer';
import {AppRootStateType} from '../../app/store';
import { Redirect } from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const isLoggedin = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Minimum length 3 symbols';
            }


            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    })

// Лущенко regexp

    if (isLoggedin) {
        return <Redirect to={'/'}/>
    }

    return <div>
        {/*<Grid container justifyContent={'center'}>*/}
        {/*    <Grid item justifyContent={'center'}>*/}
        <FormControl>
            <FormLabel>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </FormLabel>


            <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <TextField label="Email" margin="normal"
                        // name={'email'}
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        // onBlur={formik.handleBlur}
                               {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}

                    <TextField type="password" label="Password"
                               margin="normal"
                        // name={'password'}
                        // onChange={formik.handleChange}
                        // value={formik.values.password}
                        // onBlur={formik.handleBlur}
                               {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                    <FormControlLabel label={'Remember me'} control={<Checkbox
                        // name={'rememberMe'}
                        // onChange={formik.handleChange}
                        {...formik.getFieldProps('rememberMe')}
                        checked={formik.values.rememberMe}
                    />}/>

                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </form>
        </FormControl>
        {/*    </Grid>*/}
        {/*</Grid>*/}
    </div>
}
