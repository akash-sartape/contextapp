import React, { useContext } from "react"
import { Themecontext } from "./App";

const Buttonchange = ()=>{
    const {theme,Toggletheme} = useContext(Themecontext);
    return(<>
        <button onClick={Toggletheme}>Change Theme</button>
        </>
    )
}
export default Buttonchange;