import React from 'react';

const Button = ({ children, className, onClick, disabled = false, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`transition-all ${className || 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;