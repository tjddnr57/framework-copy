import React from "react";

export const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`} {...props}>
    {children}
  </button>
);

export const Input = ({ className, ...props }) => (
  <input className={`border p-2 rounded ${className}`} {...props} />
);
