import AboutPage from "../../pages/AboutPage";
import Checkout from "../../pages/Checkout";
import ContactPage from "../../pages/ContactPage";
import EmailVerified from "../../pages/EmailVerified";
import EmailVerify from "../../pages/EmailVerify";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ProductDetails from "../../pages/ProductDetails";
import ProductFiltering from "../../pages/ProductFiltering";
import Register from "../../pages/Register";

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <AboutPage />},
    { path: '/contact', element: <ContactPage />},
    { path: '/details/:id', element: <ProductDetails />},
    { path: '/shop', element: <ProductFiltering />} ,
    { path: '/checkout', element: <Checkout /> },
    { path: 'auth', children: [
        {path: 'login', element: <Login />},
        {path: 'register', element: <Register />}
    ]},
    { path: "/emailVerify", element: <EmailVerify />},
    { path: "/emailVerified", element: <EmailVerified />}
];