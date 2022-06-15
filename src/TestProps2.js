import React, { useContext } from "react";
import { Themecontext } from "./App";
import './App.css';
 const Testprops2 = ()=>{
    const {theme}=useContext(Themecontext)
     return(
       
         <>
         <div className={theme==="light" ? "light" : "dark"}>Context2</div>
         </>
     )

 }
 export default Testprops2;