import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}

const Button: React.FC<ButtonProps> = ({ children, ...attr }) => {
  return (
    <button {...attr}>
      {children}
    </button>
  );
};

export default Button;
