
import { useContext } from 'react';
import { Themecontext } from './App';
import './App.css';
import Testprops2 from './TestProps2';
const Testprops=()=>{
const {theme} = useContext(Themecontext);

    return(<>
    
        <div className={theme==="light" ? "light" : "dark"}>
   <div>Context1</div>
   
    </div>
    <Testprops2></Testprops2></>
    )
}
export default Testprops;