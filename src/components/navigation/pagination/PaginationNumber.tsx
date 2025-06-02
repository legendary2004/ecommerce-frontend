import { paginationProps } from "../../../interface/componentsInt"

const PaginationNumber = (props: paginationProps) => (
    <button type="button" 
    className={`min-h-9.5 min-w-9.5 flex justify-center items-center border 
        ${"border-neutral-100 dark:border-neutral-700"} 
        ${"hover:bg-gray-100 dark:hover:bg-white/10"} text-gray-800 py-2 px-3 
        text-sm rounded-lg dark:text-white dark:focus:bg-white/10`} aria-current="page">{props.label}</button>
)

export default PaginationNumber