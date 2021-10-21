import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';
import CoHolders from '../pages/CoHolders';
import Register from '../pages/CoHolders/Register';
import ForgotPassword from '../pages/ForgotPassword';
import PageNotFound from '../pages/PageNotFound';

// @TODO: if logged in, rediret to Home, else, redirect to Login
const Routes = [
    { path: "/", page: <Home /> },
    { path: "/home", page: <Home /> },
    { path: "/perfil", page: <Profile /> },
    { path: "/login", page: <Login /> },
    { path: "/cotitulares", page: <CoHolders /> },
    { path: "/cotitulares/cadastrar", page: <Register /> },
    { path: "/esqueci-minha-senha", page: <ForgotPassword /> },
    
];

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map(({ path, page }) => {
                    return (
                        <Route exact path={path} key={path}>
                            {page}
                        </Route>
                    );
                })};
                <Route path="/*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
