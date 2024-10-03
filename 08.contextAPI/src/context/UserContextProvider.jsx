import { useState } from "react";
import userContex from "./UserContext";

const UserContexProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    return(
        <userContex.Provider value={{user, setUser}}>
            {children}
        </userContex.Provider>
    )
}

export default UserContexProvider;