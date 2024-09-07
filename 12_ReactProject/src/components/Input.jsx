import React from "react";
import { useRef, useId } from "react";


//input component for various input boxes in the login or signup page, reference will be passed through Forward Ref
const Input = React.forwardRef(function Input({
    label,
    type= "text",
    className = "",
    ...props
}, ref) {

    const id = useId()
    return (
        <div className="w-full">
            {label && (<label
            className="inline-block mb-1 pl-1"
            htmlFor={id}
            >
                {label}
            </label>)}
            <input
            type={type}
            className={`${className}` }
            {...props}
            ref={ref}
            id={id}
            >
            </input>
        </div>
    )
})

export default Input;