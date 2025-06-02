import { link } from "../../../../interface/componentsInt"

const NavLink = (props: link) => {

    return (
        <a href={props.path} className="py-2 md:py-0 flex items-center font-medium text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
            {props.label}
        </a>
    )
}

export default NavLink