import React from 'react'
import { Field, reduxForm } from 'redux-form'
const LoginForm =(props)=>{
    return <div>
        <h1>Login</h1>
        <div>
            <Field placeholder={'Login'} component={"input"}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={"input"}/>
        </div>
        <div>
            <Field component={"input"} type="checkbox"/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>
}
const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)
const Login=(props)=>{
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>
}

export default Login;
