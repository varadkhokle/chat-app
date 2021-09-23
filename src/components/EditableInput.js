import React, { useCallback } from 'react'
import { useState } from 'react'
import { Alert, Icon, Input, InputGroup } from 'rsuite'

const EditableInput = ({initialValue,onSave,label=null,placeholder="Write your value",emptyMsg="Input is empty",...inputProp}) => {
const [isEditable,setIsEditable]=useState(false);
    const [input,setInput]=useState(initialValue);


 


   const onEditClick=useCallback(()=>{
       setIsEditable(p=>!p)
       setInput(initialValue);
   })

    const onInputChange=useCallback((value)=>{
        setInput(value);

    })

    const onSaveClick= async ()=>{
        const trimmed=input.trim();
        if(trimmed==='')
        {
            Alert.info(emptyMsg,4000)
        }
        
        if(trimmed!==initialValue)
        {
            await onSave(trimmed);
        }
        
        setIsEditable(false);
    }

    return (
        <div>
         {label}
         <InputGroup>
         <Input disabled={!isEditable} {...inputProp} placeholder={placeholder} onChange={onInputChange} value={input} ></Input>

         <InputGroup.Button onClick={onEditClick}>
         <Icon icon={isEditable ? 'close':'edit2'}>
             </Icon></InputGroup.Button>
            
            
       {isEditable&&(
             <InputGroup.Button onClick={onSaveClick}>
             <Icon icon="check">
                 </Icon></InputGroup.Button>
       )}
            
            
             </InputGroup>
        </div>
    )
}

export default EditableInput
