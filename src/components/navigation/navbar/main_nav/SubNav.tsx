import NavLink from "./NavLink"

const SubNav = () => {
    return (
            <main className="nav-animate-style">
                {/* Secondary Navbar */}
                <div className="md:py-4 ">
                    <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:gap-3 px-4 sm:px-6 lg:px-8">
                    {/* Collapse */}
                    <div className="overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-y-0.5 md:gap-y-0 md:gap-x-6">
                                <a className="py-2 md:py-0 flex items-center font-medium text-sm text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500" href="#" aria-current="page">
                                    Dashboard
                                </a>
                                <NavLink label="Home" path="/"/>
                                <NavLink label="Shop" path="/shop"/>
                                <NavLink label="About" path="/about"/>
                                <NavLink label="Contact us" path="/contact"/>
                                <NavLink label="Details" path="/details" />
                                <NavLink label="Checkout" path="/checkout" />
                                <NavLink label="Login" path="/auth/login" />
                                <NavLink label="Register" path="/auth/register" />
                            </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                    </nav>
                </div>
            </main>
    )
}

export default SubNav