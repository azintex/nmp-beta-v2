import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../_actions/authentication';


function ShowAlert(props) {
    return(
        <div className='row justify-content-center'>
            <div className='col-4'>
                <div className='alert alert-warning'>
                    {props.alertMessage}
                </div>
            </div>
        </div>
    )
}

function FormPage(props) {

    useEffect(() => {
        let {from} = props.location.state || {from : {pathname: '/dashboard'}};
        if(props.isAuthenticated) {
            props.history.replace(from);
        }
    }, [props.isAuthenticated]);
    
    function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        props.signIn(formData);
    }

    return (
        <>
            <div className='container'>
                {props.message ? <ShowAlert alertMessage={props.message} /> : null}
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input className='form-control' type='text' name='username' id='username' placeholder='Username' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input className='form-control' type='password' name='password' id='password' placeholder='Password' required />
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-outline-primary'>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </>
        )
    }

function mapStateToProps(state) {
    return {
        message: state.authentication.message,
        isAuthenticated: state.authentication.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: credentials => dispatch(signIn(credentials))
    }
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(FormPage);
export default SignIn;