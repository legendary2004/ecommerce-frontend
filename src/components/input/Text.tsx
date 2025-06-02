import { FormEvent } from "react"
import { textInput } from "../../interface/componentsInt"
import { secondaryTextColor } from "../../variables/styles/colors"
import { inputField } from "../../variables/styles/input/input"

const Text = (props: textInput) => {
    return (
        <div>
            <label  htmlFor={props.id} className={`${secondaryTextColor} mb-2 block`}>{props.label}</label>
            <input className={inputField}
                id={props.id}
                name={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)}
                required={props.isRequired}
            />
        </div>
    )
}

export default Text