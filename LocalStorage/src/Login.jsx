import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function Login(){
    const [user,setUser]= useLocalStorage()
    const [value,setValue]=useState("")
    function handleSubmit(){
 setUser(value)
    }
    return(
        <div>
            <input
            value={value}
             type="text"
             onChange={(e)=>setValue(e.target.value)}
             />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}