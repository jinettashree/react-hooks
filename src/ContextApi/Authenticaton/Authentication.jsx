import { AuthenticationContext } from "./AuthenticationContext";

import { useState } from "react"

const Authentication = ({children}) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loggedIn = () =>{
        setIsLoggedIn(!isLoggedIn)
    }

return(
    <AuthenticationContext.Provider value={ {isLoggedIn, loggedIn} }>
        {children}
    </AuthenticationContext.Provider>
)

}

export default Authentication