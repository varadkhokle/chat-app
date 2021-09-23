import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import Dashboard from '.';
import { useModelState } from '../../misc/custon-hooks'

const DashboardToggler = () => {


    const {isOpen,close,open}=useModelState();
    return (
        <div>
            <Button block color="blue" onClick={open}>
                <Icon mr-2 icon="dashboard" />Dashboard
            </Button>
            <Drawer show={isOpen} onHide={close} placement="left">
              <Dashboard></Dashboard>
            </Drawer>

        </div>
    )
}

export default DashboardToggler
