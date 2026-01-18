import { useContext } from "react"
import { AuthenticationContext } from "./AuthenticationContext"

const Child = () => {
    const {isLoggedIn, loggedIn} = useContext(AuthenticationContext)
return(
    <div>
        <p>Authentication</p>
        <h4>
            {isLoggedIn ? "User is Logged In" : "User is Logged Out"}
        </h4>
        <button onClick={loggedIn}>
            {isLoggedIn ? "Log Out" : "Log In"}
        </button>
    </div>
)
}

export default Child