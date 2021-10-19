import { stringTypeAnnotation } from '@babel/types';
import React, { useState } from 'react'
import { useCallback, useRef } from 'react/cjs/react.development';
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite'
import ModalFooter from 'rsuite/lib/Modal/ModalFooter';
import { useModelState } from '../misc/custon-hooks'
import firebase from 'firebase/compat/app'
import { database } from '../misc/firebase';

const {StringType}=Schema.Types;

const model=Schema.Model({
    name:StringType().isRequired('Chat name is required'),
    description:StringType().isRequired('Description is required'),
})

const INITIAL_FORM={
    name:'',
    description:'',
}

const CreateRoomBtnModal = () => {
    const { isOpen, open, close } = useModelState();

    const [formValue,setFormValue]=useState(INITIAL_FORM);
    const [isLoading,setIsLoading]=useState(false);
   
    const formRef=useRef();

   const onFormChange=useCallback(value=>{
    setFormValue(value);
   },[]);

   const onSubmit=async()=>{
       
    if(!formRef.current.check()){
        return;
    }
    setIsLoading(true);
    const newRoomData={
        ...formValue,
        createdAt:firebase.database.ServerValue.TIMESTAMP
    }
   try {
    await database.ref('rooms').push(newRoomData);
    
    setIsLoading(false)
    setFormValue(INITIAL_FORM);
    close();
    Alert.info(`${formValue.name} has been created`,4000)


   } catch (error) {
       setIsLoading(false);
       Alert.error(error.message,4000)
   } 

   }   
   
   return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative">Create new chat room</Icon>
            </Button>


            <Modal show={isOpen} onHide={close}> 
                <Modal.Header>
                    <Modal.Title>New Chat room</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                   <Form fluid onChange={onFormChange} formValue={formValue} model={model} ref={formRef} >
                       <FormGroup>
                           <ControlLabel>Room Name</ControlLabel>
                           <FormControl name="name" placeholder="Enter chat room name..."></FormControl>           
                       </FormGroup>
                       <ControlLabel>Description</ControlLabel>
                       <FormControl componentClass="textarea" name="description" placeholder="Enter the description" row={5}  />
                       <FormGroup>

                       </FormGroup>
                   </Form>
                </Modal.Body>
                <ModalFooter>
                    <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                     Create New Chat Room
                    </Button>
                </ModalFooter>
            </Modal>

        </div>

    )
}

export default CreateRoomBtnModal
