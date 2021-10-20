import { React, useEffect, useState } from 'react'
import { useRef } from 'react/cjs/react.development';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggler from './dashboard/DashboardToggler'
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
    const topSidebarRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (topSidebarRef.current) { setHeight(topSidebarRef.current.scrollHeight) }
    }, [topSidebarRef])

    return (
        <div className="h-100 pt-2">

            <div ref={topSidebarRef}>
                <DashboardToggler />
                <CreateRoomBtnModal></CreateRoomBtnModal>
                <Divider>Join Conversation</Divider>
            </div>

            <ChatRoomList aboveElHeight={height}></ChatRoomList>

        </div>
    )
}

export default Sidebar;
