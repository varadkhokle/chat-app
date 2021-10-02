import React from 'react'
import { Avatar } from 'rsuite'
function getNameInitials(name){
    const splitName=name.toUpperCase().split(' ');

    if(splitName.length>1)
    {return splitName[0][0]+splitName[1][0];}
    else
    return splitName[0][0];
}

const ProfileAvatar = ({ name, ...avatarProps }) => {
    return <Avatar  circle {...avatarProps} >
        {getNameInitials(name)}
    </Avatar>;

}

export default ProfileAvatar
