import React from 'react'
import { Redirect, Route } from 'react-router';

export const PublicRoute = ({ children, ...routeProps }) => {

    let profile = false;

    if (profile) { return <Redirect to="/"></Redirect> }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}


