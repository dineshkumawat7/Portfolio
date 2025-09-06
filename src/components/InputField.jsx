const InputField = ({
    type = "text",
    name,
    value,
    onChange,
    placeholder = "",
    required = false,
    disabled = false,
    error = "",
    className = "",
    inputClassName = "",
}) => {
    return (
        <div className={`flex px-4 py-2 flex-col w-full mb-4 ${className}`}>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"} 
          ${error ? "border-red-500" : "border-gray-300"}
          ${inputClassName}`}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;
