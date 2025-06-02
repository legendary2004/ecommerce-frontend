import { useContext, useEffect, useState } from "react";
import { icon_5 } from "../../../../variables/styles/size";
import UserDropdown from "../../../dropdown/UserDropdown"
import NavBrand from "./NavBrand"
import SubNav from "./SubNav"
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "../../../modal/CartModal";
import { ThemeContext } from "../../../../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const MainNav = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const [cart, setCart] = useState(false)
    const [mainNav, setMainNav] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full text-sm py-2.5">
            <nav className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8 flex basis-full items-center w-full mx-auto">
                <NavBrand />

                <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
                <div className="md:hidden">
                    <button onClick={() => setMainNav(prev => !prev)} type="button" className="hs-collapse-toggle size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-secondaru-navbar-collapse" aria-expanded="false" aria-controls="hs-secondaru-navbar" aria-label="Toggle navigation" data-hs-collapse="#hs-secondaru-navbar">
                    <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                    <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>

                <div className="hidden md:block">
                    {/* Search Input */}
                    <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                        <svg className="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <input type="text" className="py-2 ps-10 pe-16 block w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600" placeholder="Search" />
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                        <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                        </button>
                    </div>
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                        <svg className="shrink-0 size-3 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
                        <span className="mx-1">
                        <svg className="shrink-0 size-3 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </span>
                        <span className="text-xs">/</span>
                    </div>
                    </div>
                    {/* End Search Input */}
                </div>

                <div className="flex-end flex-wrap gap-1">
                    <button type="button" className="md:hidden size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <span className="sr-only">Search</span>
                    </button>

                    <button type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                    <span className="sr-only">Notifications</span>
                    </button>

                    <button type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span className="sr-only">Activity</span>
                    </button>

                    <button onClick={() => setTheme((prev: string) => prev == 'dark' ? 'light' : 'dark')} type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        {theme == 'dark' ? <MdDarkMode className="w-5 h-5" /> : <MdLightMode className="w-5 h-5" />}
                    <span className="sr-only">Activity</span>
                    </button>

                    <button onClick={() => setCart((prev: any) => !prev)} type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                        <FaShoppingCart className={icon_5} />
                    <span className="sr-only">Cart</span>
                    </button>

                    <UserDropdown />
                </div>
                </div>
            </nav>
            </header>
            {(width > 769 || mainNav) && <SubNav />}
            {cart &&  <CartModal prop={() => setCart(false)} />}
        </>
    )
}

export default MainNav