import React, { useState } from 'react'

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [data, setData] = useState({});

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            setData({ name, email, password });
        }
        
        // reset the password and reset password fields
        else {
            setPassword("");
            setRepeatPassword("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSignUpSubmit}>
                <div className="container">
                    <label htmlFor="name"><b>Name</b></label>
                    <input 
                    type="text" 
                    placeholder="Enter Name" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" 
                    name="email" 
                    required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" 
                    name="psw" 
                    required/>

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input 
                    type="password" 
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    placeholder="Repeat Password" 
                    name="psw-repeat" 
                    required/>

                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
