import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HowToUse from './pages/HowToUse/HowToUse';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/how-to-use">
                    <HowToUse />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
