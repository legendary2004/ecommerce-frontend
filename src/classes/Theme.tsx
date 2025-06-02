import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme: React.FC<PropsWithChildren> = ({children}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            {children}
        </div>
    )
}

export default Theme