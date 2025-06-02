import { FormEvent } from "react"
import { checkbox } from "../../interface/componentsInt"
import { primaryTextColors, secondaryTextColor } from "../../variables/styles/colors"

const Checkbox = (props: checkbox) => (
    <div className="inline-flex items-center">
        <label className="flex items-center cursor-pointer relative" htmlFor={props.id}>
            <input type="checkbox"
                checked={props.checked}
                onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)}
                required={props.isRequired}
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md 
                border border-slate-300 checked:bg-white checked:border-white dark:checked:bg-neutral-900 dark:checked:border-neutral-900"
                id={props.id} 
            />
            <span className={`${primaryTextColors} absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            </span>
        </label>
        <label className={`${secondaryTextColor} cursor-pointer ml-2 text-sm`} htmlFor={props.id}>
            {props.label}
        </label>
    </div>
)

export default Checkbox