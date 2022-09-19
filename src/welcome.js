

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './welcome.css';

const Welcome = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    let Navigate = useNavigate()
    
    
        useEffect(()=>{
            if (token.length===0) {
            Navigate('/login')}
        },[token])
       

         return (
            <div className="welcomecard">
                <div>
                    Welcome Page
                </div>
                <button onClick={()=>{localStorage.setItem("token","")}}>
                    Logout
                </button>
            </div>
        )
    }


export default Welcome