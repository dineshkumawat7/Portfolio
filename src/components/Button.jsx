const Button = ({
    text = "Click Me",
    className = "px-4 py-2 rounded-none bg-green-400",
    onClick = () => { },
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"} 
        ${className}
      `}
        >
            {text}
        </button>
    );
};

export default Button;
