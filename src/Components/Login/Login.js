import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    if (user) {
        navigate('/todo')
    }


    return (
        <div className='mt-5'>
            <h2 className='fw-bold text-dark'>Please Login To Create A Todo</h2>
            <button onClick={()=>signInWithGoogle()} className='btn btn-warning mt-4'>Continue with google</button>
        </div>
    );
};

export default Login;