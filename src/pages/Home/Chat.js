import React from 'react'
import { Loader } from 'rsuite'
import ChatTop from '../../components/chat-window/top'
import Messages from '../../components/chat-window/messages'
import ChatBottom from '../../components/chat-window/bottom'
import { useParams } from 'react-router'
import { useRooms } from '../../context/rooms.context'

const Chat = () => {
    
    const {chatId}=useParams();
    const rooms=useRooms();

    if(!rooms)
    {return <Loader center vertical size="md" speed="slow" />}

    const currentRoom=rooms.find(room=>room.id===chatId);
    
    if(currentRoom)
    {
        return <h6 className="text-center mt-page" > Chat {chatId} not found </h6>
    }

    return (
        <div>
            <div  className="chat-top">
                <ChatTop></ChatTop>
            </div>
            <div className="chat-middle">
             <Messages></Messages>
            </div>
            <div className="chat-bottom">
         <ChatBottom></ChatBottom>
            </div>
        </div>
    )
}

export default Chat
