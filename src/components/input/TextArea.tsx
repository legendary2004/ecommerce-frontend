import { FormEvent } from "react"
import { textArea } from "../../interface/componentsInt"
import { secondaryTextColor } from "../../variables/styles/colors"
import { inputField } from "../../variables/styles/input/input"

const TextArea = (props: textArea) => {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className={`${secondaryTextColor} mb-2 block`}>{props.label}</label>
            <textarea rows={4} id={props.id} name={props.id} value={props.value} 
            onChange={(e: FormEvent<HTMLTextAreaElement>) => props.handleChange(e)} 
            required={props.isRequired} placeholder={props.placeholder} className={inputField}></textarea>
        </div>
    )
}

export default TextArea