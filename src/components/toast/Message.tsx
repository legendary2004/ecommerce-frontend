import { toast } from "../../interface/componentsInt";
import { itemsBgColrs, primaryTextColors } from "../../variables/styles/colors";
import { FaInfoCircle } from "react-icons/fa";
import { icon_5 } from "../../variables/styles/size";

const ToastMessage: React.FC<toast> = ({message, closeMessage}) => {
  return (
    <div
      className={`${itemsBgColrs} animate-in slide-in-from-bottom duration-500 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 divide-x divide-gray-200 rounded-lg shadow-sm bottom-5 right-5`}
      role="alert"
    >
      <div
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow-sm dark:text-gray-400"
        role="alert"
      >
        <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${primaryTextColors}`}>
          <FaInfoCircle className={icon_5} />
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white"
            onClick={() => closeMessage()}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToastMessage;
