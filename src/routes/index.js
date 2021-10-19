import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../pages/Navbar';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';
import CoHolders from '../pages/CoHolders';
import Register from '../pages/CoHolders/Register';
import PageNotFound from '../pages/PageNotFound';

const Routes = [
    { path: "/", page: <Home /> },
    { path: "/home", page: <Home /> },
    { path: "/perfil", page: <Profile /> },
    { path: "/login", page: <Login /> },
    { path: "/cotitulares", page: <CoHolders /> },
    { path: "/cotitulares/cadastrar", page: <Register /> },
];

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                {Routes.map(({ path, page }) => {
                    return (
                        <Route exact path={path}>
                            {page}
                        </Route>
                    );
                })};
                <Route path="/*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}
