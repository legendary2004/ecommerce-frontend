import { FormEvent, useState } from "react"
import AuthPage from "../classes/AuthPage"
import Password from "../components/input/Password"
import Text from "../components/input/Text"
import { registerFormObj } from "../variables/objects/emptyObjects"
import { handleInputChange } from "../variables/functions/formChange"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ToastMessage from "../components/toast/Message"

const Register = () => {
    const navigate = useNavigate();
    const [formProp, setFormProp] = useState(registerFormObj)
    const [isVisible, setIsVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users", formProp)
        .then(() => {  
            navigate("/emailVerify", {state: {email: formProp.email}})
        })
        .catch(err => {
            setErrorMsg(err.response.data.message)
        })
    }

    return (
        <AuthPage label="Already have an account" page="Sign up" navigation="/auth/login" formSubmit={(e: FormEvent) => submitForm(e)}>
            <Text 
                id="username"
                label="Username"
                type="text"
                placeholder="Enter username..."
                isRequired={true}
                value={formProp.username}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
            />
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
                type="password"
                placeholder="Enter password..."
                isRequired={true}
                value={formProp.password}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                isVisible={isVisible}
                changeVisibility={() => setIsVisible(prev => !prev)}
            />
            <Password 
                id="passwordRepeat"
                label="Password Repeat"
                type="password"
                placeholder="Repeat password..."
                isRequired={true}
                value={formProp.passwordRepeat}
                handleChange={(e: FormEvent<HTMLInputElement>) => handleInputChange(e, setFormProp)}
                isVisible={isVisible}
                changeVisibility={() => setIsVisible(prev => !prev)}
            />
            {errorMsg && <ToastMessage message={errorMsg} closeMessage={() => setErrorMsg("")} />}
        </AuthPage>
    )
}

export default Register