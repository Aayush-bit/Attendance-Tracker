import React, {useState, useEffect} from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        setData({ email, password });
    }

    useEffect(() => {
        if(JSON.stringify(data) !== "{}") console.log(data);
    }, [data])
    
    return (
        <div>
            <form onSubmit={handleSignUpSubmit}>
                <div className="container">
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

                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
