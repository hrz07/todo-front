import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light text-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TODOAPP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/todo' className="nav-link active" aria-current="page" href="#">Todo</NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    user ? <button onClick={()=>signOut(auth)} className='btn btn-light text-primary'>Logout</button> :  <NavLink to='/login' className="nav-link active" aria-current="page" href="#">Login</NavLink>
                                }
                               
                            </li>
                          
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;