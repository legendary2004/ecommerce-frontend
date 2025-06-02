import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const ThemeContext = createContext<any>({})

const ThemeContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState("")

    useEffect(() => {
        const themeStorage = localStorage.getItem("theme") || ""
        if (themeStorage) setTheme(themeStorage)
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
