import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { BASE_API_URL } from "../../config"
import { itemsBgColrs } from "../../variables/styles/colors"
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom"

const UserDropdown = () => {
    const navigate = useNavigate()
    const [isExpanded, setExpended] = useState(false)
    const {token, setToken} = useContext(AuthContext)
    const [user, setUser] = useState({sub: 0, username: ""})

    useEffect(() => {
        const unsub = async () => {
            try {
                if (token) {
                    const response = await axios.get(`${BASE_API_URL}/users/${token}`)
                    setUser(response.data)
                }
            } catch (err) {
                console.log(err)
            }
        }

        unsub()
    }, [token])

    const logOut = () => {
        setToken("")
        navigate("/auth/login")
    }

    return (
        <div className="relative inline-flex">
            <button onClick={() => setExpended(prev => !prev)} type="button" className="size-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <img className="shrink-0 size-5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
            </button>

            {isExpanded && <div className={`${itemsBgColrs} absolute top-10 right-0 z-50 duration min-w-60 shadow-md rounded-lg mt-2 dark:border dark:divide-neutral-700`} role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                <div className="py-3 px-5 rounded-t-lg">
                <p className="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">{user?.username || ""}</p>
                </div>
                <div className="p-1.5 space-y-0.5">
                <a onClick={logOut} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                    <IoIosLogOut className="w-5 h-5" />
                    Log out
                </a>
                
                </div>
            </div>}
        </div>
    )
}

export default UserDropdown