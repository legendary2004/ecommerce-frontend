import { FaEye } from "react-icons/fa";
import { icon_5 } from "../../variables/styles/size";

const ProductTooltip = () => {
    return (
        <>
            <button type="button" className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                <FaEye className={icon_5} />
            </button>
            <div className="absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
        </>
    )
}

export default ProductTooltip