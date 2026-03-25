import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: () => void;
};

export default function Button({
  type = "button",
  children,
  variant = "primary",
  fullWidth = false,
  size = "md",
  loading = false,
  onClick,
}: ButtonProps) {
  const base =
    "rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {loading ? "Chargement..." : children}
    </button>
  );
}
