import { primaryTextColors, secondaryTextColor } from "../../variables/styles/colors"
import { inputField } from "../../variables/styles/input/input"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { absolute_end } from "../../variables/styles/position/absolute";
import { flex_center } from "../../variables/styles/display/flex";
import { passInput } from "../../interface/componentsInt";
import { FormEvent } from "react";

const Password = (props: passInput) => {
    return (
        <div>
            <label className={`${secondaryTextColor} block mb-2`} >Password</label>
            <div className="relative">
                <input className={inputField}
                    id={props.id}
                    name={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)}
                    required={props.isRequired}
                />
                <button onClick={() => props.changeVisibility()} type="button" className={`${absolute_end} ${flex_center} ${primaryTextColors} px-3 cursor-pointer`}>
                    {props.isVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
        </div>
    )
}

export default Password