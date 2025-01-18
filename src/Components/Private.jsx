import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Firebase/FireBase";
import 'react-notifications/lib/notifications.css';

export const Private=({children})=>{
    const [user] = useAuthState(auth);
    if(!user){ 
         alert("Please Login....")
        return window.location.href="/Home"
     } 
     else{
        return children
     }  
    }


export default Private;