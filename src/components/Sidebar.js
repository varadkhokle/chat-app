import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggler from './dashboard/DashboardToggler'

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">

            <div>
           <DashboardToggler/>
           <CreateRoomBtnModal></CreateRoomBtnModal>
            </div>

            bottom
            
        </div>
    )
}

export default Sidebar;
