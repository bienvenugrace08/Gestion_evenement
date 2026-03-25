import React from "react";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  error?: string;
  helperText?: string;
  required?: boolean;
};

export default function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  error,
  helperText,
  required,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-2.5 text-gray-400">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>
      {helperText && <p className="text-xs text-gray-400 mt-1">{helperText}</p>}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
