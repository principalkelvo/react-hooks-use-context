import { React, createContext, useState } from "react";

// create the context
const ThemeContext = createContext();
function UserProvider({ children }) {
    const [theme, setTheme] = useState("dark");
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}
export {UserProvider, ThemeContext}