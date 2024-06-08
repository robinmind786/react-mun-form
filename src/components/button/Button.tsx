'use client';

import React, { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = 'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none',
  style = {},
  onClick,
  title = '',
  type = 'button',
  ...rest
}) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      title={title}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
