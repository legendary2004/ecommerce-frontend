import { FormEvent, useContext, useEffect, useState } from "react"
import AuthPage from "../classes/AuthPage"
import Password from "../components/input/Password"
import Text from "../components/input/Text"
import { loginFormObj } from "../variables/objects/emptyObjects"
import { handleInputChange } from "../variables/functions/formChange"
import axios from "axios"
import { BASE_API_URL } from "../config"
import ToastMessage from "../components/toast/Message"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const {token, setToken} = useContext(AuthContext)
    const [formProp, setFormProp] = useState(loginFormObj)
    const [isVisible, setIsVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        axios.get(`${BASE_API_URL}/users/login?email=${formProp.email}&password=${formProp.password}`)
        .then(res => setToken(res.data.accessToken))
        .catch(err => setErrorMsg(err.response.data.message))
    }

    useEffect(() => {
        if (token) navigate("/")
    }, [token])
    

    return (
        <AuthPage label="Don't have an account?" page="Sign in" navigation="/auth/register" formSubmit={(e: FormEvent) => submitForm(e)}>
            <Text 
                id="email"
                label="Email"
                type="email"
                placeholder="Enter email..."
                isRequired={true}
                value={formProp.email}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
            />
            <Password 
                id="password"
                label="Password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter password..."
                isRequired={true}
                value={formProp.password}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                isVisible={isVisible}
                changeVisibility={() => setIsVisible(prev => !prev)}
            />
            <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-500">
                Remember me
                </label>
            </div>
            <div className="text-sm">
                <a href="jajvascript:void(0);" className="text-blue-600 hover:text-blue-500 font-medium">
                Forgot your password?
                </a>
            </div>
            </div>
            {errorMsg && <ToastMessage message={errorMsg} closeMessage={() => setErrorMsg("")} />}
        </AuthPage>
    )
}

export default Login