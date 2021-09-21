import React from 'react'
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({children,...routeProps}) => {

    let profile=false;

    if(!profile)
    {return <Redirect to="/signin"></Redirect>}

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}


