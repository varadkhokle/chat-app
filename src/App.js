import React from "react"

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import { SignIn } from "./pages/SignIn";
import PrivateRoute from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'
import { Home } from './pages/Home'
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (

    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn></SignIn>
        </PublicRoute>
        <PrivateRoute path="/">
          <Home></Home>
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  )
}

export default App;
