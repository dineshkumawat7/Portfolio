import React from "react";

const InputField = ({
    id,
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    ...props
}) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${className}`}
        {...props}
    />
);

export default InputField;
