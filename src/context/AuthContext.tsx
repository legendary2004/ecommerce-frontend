import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { authContext } from "../interface/contextInterface";

export const AuthContext = createContext<authContext>({
    token: "",
    setToken: () => {}
})

const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [token, setToken] = useState("")

    useEffect(() => {
        const authToken = window.localStorage.getItem("token") || ""
        setToken(authToken)
    }, [])

    useEffect(() => {
        window.localStorage.setItem("token", token)
    }, [token])

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider