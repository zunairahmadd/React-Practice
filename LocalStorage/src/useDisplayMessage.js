import { useState } from "react";

export default function useDisplayMessage(){
    const [message,setMessage]=useState("This is a Message")
    function displayMessage(){
    console.log("dummy data");
    

    }
    return[message,displayMessage]
}