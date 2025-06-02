import { useLocation } from "react-router-dom"
import Theme from "../classes/Theme"
import { primaryBgColors, primaryTextColors } from "../variables/styles/colors"

const EmailVerify = () => {
    const location = useLocation()

    return (
        <Theme>
            <div className="h-dvh">
                <div className={primaryBgColors}>
                    <h1 className={`${primaryTextColors} text-3xl font-bold text-center`}>
                        We sent a verification link to {location.state.email}
                    </h1>
                </div>
            </div>
        </Theme>
    )
}

export default EmailVerify