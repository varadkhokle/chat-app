import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(false);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(() => {

       let userRef;

       const authUnsub= auth.onAuthStateChanged( authObj=>{
            if(authObj)
            { 
              userRef = database.ref(`/profiles/${authObj.uid}`);
              userRef.on('value',(snap)=>{

                    const {name,createdAt,avatar}=snap.val();
                
                    const data ={
                        name,
                        avatar,
                        createdAt,
                        uid:authObj.uid,
                        email:authObj.email
                    }
                  
                setProfile(data);
                setIsLoading(false);
                console.log('here2')

                });
              
            
            }
            else{

                if(userRef)
                {
                    userRef.off();
                }
                console.log('here')
                setProfile(null);
                setIsLoading(false);

            }
        } )
  return ()=>{
      authUnsub();
      if(userRef)
      {
          userRef.off();
      }
  }
    }, [])

    return (<ProfileContext.Provider value={{isLoading , profile}}> {children}</ProfileContext.Provider>
    )
};

export const useProfile = () => useContext(ProfileContext);