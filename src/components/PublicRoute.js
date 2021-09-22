import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/ProfileContext';

export const PublicRoute = ({ children, ...routeProps }) => {

    const {profile,isLoading} = useProfile();




  if(!isLoading && profile)
  {return <Container>
      <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
  }
    if (profile&&!isLoading) { return <Redirect to="/"></Redirect> }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}


