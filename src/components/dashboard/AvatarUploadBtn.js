import React, { useState, useRef } from 'react'
import { Alert, Button, Modal } from 'rsuite';
import AvatarEditor from 'react-avatar-editor'
import { useModelState } from '../../misc/custon-hooks';
import { database, storage } from '../../misc/firebase';
import {useProfile } from '../../context/ProfileContext';
import ProfileAvatar from './ProfileAvatar';
const acceptedFileType = ['image/png', 'image/jpg', 'image/jpeg'];


const isValidFile = (file) => acceptedFileType.includes(file.type);
const fileInputType = ".png,.jpeg,.jpg";


const getBlob = (canvas) => {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) { resolve(blob); }
            else { reject(blob); }
        })
    })
}

const AvatarUploadBtn = () => {

    const { isOpen, open, close } = useModelState();
    const {profile}=useProfile();

    const [img, setImg] = useState(null);
    const avatarEditorRef = useRef();

    const onUploadClick = async () => {
        const canvas = avatarEditorRef.current.getImageScaledToCanvas();

        try {
            const blob = await getBlob(canvas);

            const avatarFileRef=storage.ref(`/profiles/${profile.uid}`).child('avatar');

            const uploadAvatarResult=await avatarFileRef.put(blob,{
                cacheControl:`public,max-age=${3600*24*3}`

            });
            const downloadUrl=await uploadAvatarResult.ref.getDownloadURL();

            const userAvatarRef=database.ref(`/profiles/${profile.uid}`).child('avatar');
            userAvatarRef.set(downloadUrl);
            Alert.info('Avatar Updated,4000');
        }
        catch (err) { 
            Alert.error(err.message,4000);
        }
    }


    const onFileInputChange = (ev) => {
        const currFiles = ev.target.files;

        if (currFiles.length === 1) {
            const file = currFiles[0];
            if (isValidFile(file)) {
                setImg(file);
                open();
            }
            else {
                Alert.warning('Wrong file type ', 4000);
            }
        }
    }

    return (
        <div className="mt-3 text-center" >
            <ProfileAvatar src={profile.avatar} name={profile.name} className="width-200 height-200 img-fullsize font-huge"  />

            <div>
                <label htmlFor="avatar-upload" className="cursor-pointer  padded">
                    Select new Avatar
                    <input id="avatar-upload" type="file" accept={fileInputType} className="d-none " onChange={onFileInputChange} />
                </label>

                <Modal show={isOpen} onHide={close}>
                    <Modal.Header>
                        <Modal.Title>
                            Adjust and Upload new Avatar
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            {img && <AvatarEditor
                                ref={avatarEditorRef}
                                image={img}
                                width={200}
                                height={200}
                                border={10}
                                borderRadius={100}
                                rotate={0}
                            />}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button appearance="ghost" block onClick={onUploadClick} >
                            Upload new Avatar
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AvatarUploadBtn
