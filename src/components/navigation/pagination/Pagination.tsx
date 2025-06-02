import { paginationProps } from "../../../interface/componentsInt"
import { inputField } from "../../../variables/styles/input/input"
import PaginationNumber from "./PaginationNumber"

const MyPagination = (props: paginationProps) => (
<div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
  <nav className="flex items-center gap-x-1" aria-label="Pagination">
    <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous">
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span className="sr-only">Previous</span>
    </button>
    <div className="flex items-center gap-x-1">
        {props.paginations && props.paginations?.length > 0 && props.paginations?.map(item => (
            <PaginationNumber 
                key={item.page}
                label={+item.page}
                paginations={props.paginations}
            />
        ))}
      <div className="hs-tooltip inline-block">
        <button type="button" className="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10" aria-label="Previous">
          <span className="group-hover:hidden text-xs">•••</span>
          <svg className="group-hover:block hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path>
          </svg>
          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700" role="tooltip">
            Next 4 pages
          </span>
        </button>
      </div>
      <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">8</button>
    </div>
    <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next">
      <span className="sr-only">Next</span>
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </nav>

  <div className="flex justify-center sm:justify-start items-center gap-x-2">
    <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
      Go to
    </span>
    <input type="number" className={inputField} />
    <span className="text-sm text-gray-800 whitespace-nowrap dark:text-white">
      page
    </span>
  </div>
</div>

)

export default MyPagination