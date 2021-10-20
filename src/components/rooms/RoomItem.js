import React from 'react'
import TimeAgo from 'timeago-react'

export const RoomItem = ({room}) => {
    const {createdAt,name}=room;
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-disappear">
                   {name}
                </h3>
                <TimeAgo datetime={new Date(createdAt)} className="font-normal text-black-45"></TimeAgo>
            </div>

            <div className="d-flex align-items-center text-black-70">
                <span>No messages yet....</span>
            </div>
        </div>
    )
}
