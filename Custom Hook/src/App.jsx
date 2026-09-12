import { useState } from "react"
import useDisplayMessage from "./useDisplayMessage"



function App() {

const [message,displayMessage]=useDisplayMessage()
displayMessage()
  return (
    <div>
     {message}
    </div>
    
  )
}

export default App
