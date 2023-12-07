import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const clientId = "http://749613575414-hg9t0msgto4u5dc1ma7h4i7lt71pbmkj.apps.googleusercontent.com"
function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/Login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                         placeholder="Enter Name" 
                         name="email"
                         className="form-control rounded-0"
                         onChange={(e)=> setName(e.target.value)}
                          />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" 
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register 
                    </button>
                    
                </form>
                
                    <p>Already have an account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);

                            console.log(credentialResponseDecoded);
                        }}
                        onError={()=>{
                            console.log('login failed');
                        }}
                    />;
            </div>
        </div>
    );
}

export default Signup;