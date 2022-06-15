import React, { useState } from 'react';
import './App.css';
import Testprops from './Testprops';
import Buttonchange from './button';

const Themecontext = React.createContext();

function App() {
 const [theme , settheme]=useState("light");
 const Toggletheme= ()=>{
    if(theme==="light"){
      settheme("dark")
    }
    else{
      settheme("light");
    }
 }
  return (
    <Themecontext.Provider value={{theme,Toggletheme}}>
      <Buttonchange></Buttonchange>
    <div className="App">
  <Testprops></Testprops>
    </div>
    </Themecontext.Provider>
  );
}

export {App,Themecontext} ;
