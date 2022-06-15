import {useState } from "react";
import { Userdata } from "./SideEffect";
import { useDebouncing } from "./Debouncing";

export const DisplayData = ()=>{
 const [username,Setusername]=useState("")

  useDebouncing(()=>{
   Userdata(username).then((data)=>{
      return  console.log(data);
}).catch((e)=>{
return console.log(e)
})
  },[username],2000)

   return (
      <div>
         <label >Enter Username</label>
         <input className="Enteruser" onChange={(e)=>{Setusername(e.target.value)}} ></input>
      </div>
   )
}