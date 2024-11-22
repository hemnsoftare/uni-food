import { InputProps } from "@/type";
import React from "react";

const Input: React.FC<InputProps> = ({
  label,
  placeholder = "Enter text...",
  type = "text",
  icon: Icon,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="w-full flex relative flex-col items-start justify-start gap-1">
      <label htmlFor={label} className="text-text-1-medium">
        {label}
      </label>
      <input
        id={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${
          error ? "text-error-dm bg-red-bg" : "text-gray-100 bg-gray-15"
        }  outline-none px-12 rounded-lg w-full text-text-2-medium min-h-[48px]`}
        placeholder={placeholder}
      />
      {Icon && (
        <Icon
          size={24}
          color="gray"
          className={`${error ? " bottom-[34px]" : "bottom-3"} absolute left-2`}
        />
      )}
      {error && <p className="text-error-dm text-text-3-regular">{error}</p>}
    </div>
  );
};

export default Input;
