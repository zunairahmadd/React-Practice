import { useContext } from "react"
import { userContext } from "./context/UserContext";

export default function Checkout(){
    const {user}=useContext(userContext);
    return(
        <div>
            Checkout {user}
        </div>
    )
}