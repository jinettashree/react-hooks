import { useState } from "react"
import { ThemeContext } from "./ThemeContext"
const Theme = ({children}) =>{

    const[theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme("light" ? "dark" : "light")
    }
return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

export default Theme