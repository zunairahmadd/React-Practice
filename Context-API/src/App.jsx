import React, { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import { UserProvider } from "./context/UserContext";
import LogOut from "./Logout";


function App(){

  return(
   
    <div className="App">
     
  <UserProvider>
    <Login/>
    <Checkout/>
    <LogOut/>
  </UserProvider>


    </div>
  )
}
export default App;