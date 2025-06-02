import { useNavigate } from "react-router-dom"
import Theme from "../classes/Theme"
import { primaryBgColors, primaryTextColors } from "../variables/styles/colors"

const EmailVerified = () => {
    const navigate = useNavigate()

    return (
        <Theme>
            <div className="min-h-screen">
                <div className={`${primaryBgColors}`}>
                <h1 className={`${primaryTextColors} text-3xl font-bold text-center`}>
                    Hooray!! You are verified. Click <a href="#" onClick={() => navigate("/")}>here</a> to continue to homepage
                </h1>
            </div>
            </div>
        </Theme>
    )
}

export default EmailVerified