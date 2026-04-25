import { useState } from "react";
import ThemeContext from "./ThemeContex";
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    let toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }} > 
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;