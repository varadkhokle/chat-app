import React, { useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import Dashboard from '.';
import { useModelState } from '../../misc/custon-hooks'
import { auth } from '../../misc/firebase';

const DashboardToggler = () => {


    const {isOpen,close,open}=useModelState();

    const onSignOut=useCallback(()=>{
        auth.signOut();
        Alert.info('Signed Out ',4000);
        close();
    },[close]);

    return (
        <div>
            <Button block color="blue" onClick={open}>
                <Icon mr-2 icon="dashboard" />Dashboard
            </Button>
            <Drawer full show={isOpen} onHide={close} placement="left">
              <Dashboard onSignOut={onSignOut} ></Dashboard>
            </Drawer>

        </div>
    )
}

export default DashboardToggler
