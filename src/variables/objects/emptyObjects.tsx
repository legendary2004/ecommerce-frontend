import { loginForm, registerForm } from "../../interface/formInterface";
import { product } from "../../interface/objInterfaces";

export const loginFormObj: loginForm = {
    email: "",
    password: ""
}

export const registerFormObj: registerForm = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
}

export const productObj: product = {
    id: 0,
    name: "",
    category: 0,
    description: "",
    price: 0,
    stock: 0,
    warranty: 0,
    ram: 0,
    storage: 0,
    processor: "",
    display: "",
    width: 0,
    height: 0,
    pictures: [],
    colors: [],
    categoryRef: {
        id: 0,
        name: ""
    }
}

export const checkoutForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    country: "",
    city: "",
    zip: 0,
}