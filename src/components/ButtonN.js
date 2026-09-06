import React from "react";
import clsx from "clsx";

export default function ButtonN({ 
  text, 
  onClick, 
  size = "md", 
  color = "black", 
  type = "button",   
  disabled = false, 
  className,
  ...props          
}) {
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  const colorStyles = {
    black: "text-black border border-black hover:text-white",
    white: "text-white border border-white hover:text-black",
    simple: "text-black border border-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative overflow-hidden font-medium font-[bituml] transition-colors duration-300 group", 
        sizeStyles[size],
        colorStyles[color],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {/* Background Fill Effect */}
      <span
        className={clsx(
          "absolute left-0 top-0 h-full w-0 transition-all duration-500 ease-out",
          color === "black" && "bg-black",
          color === "white" && "bg-white",
          "group-hover:w-full"
        )}
      ></span>

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
