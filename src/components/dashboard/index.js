import React from 'react'
import { Button, Divider, Drawer } from 'rsuite';
import {useProfile} from '../../context/ProfileContext'
import EditableInput from '../EditableInput';
import ProviderBlock from '../dashboard/ProviderBlock'
import AvatarUploadBtn from './AvatarUploadBtn';

const Dashboard = ({onSignOut}) => {
    const {profile}=useProfile();

    const onSave= async (newData)=>{
        console.log(newData);
    }
    return (
       <>
       <Drawer.Header>
           <Drawer.Title>
Dashboard
           </Drawer.Title>
       </Drawer.Header>
       <Drawer.Body>
       <h3>
           Hey,{profile.name}
       </h3>
       <ProviderBlock/>

       <Divider/>
       <EditableInput
       initialValue={profile.name} onSave={onSave}
       label={<h6 className="mb-2">Nickname</h6>}
       name="nickname"
       />
       <AvatarUploadBtn/>
       </Drawer.Body>
       
       <Drawer.Footer>
<Button block color="red" onClick={onSignOut} >SignOut</Button>
       </Drawer.Footer>
       </>
    )
}

export default Dashboard;
