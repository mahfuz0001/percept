import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700',
  ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  loading = false, 
  icon, 
  iconPosition = 'left',
  className,
  disabled,
  href,
  external = false,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center gap-2';
  
  const combinedClasses = cn(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    loading && 'cursor-not-allowed',
    className
  );

  const content = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      
      {icon && iconPosition === 'left' && !loading && icon}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    } else {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }
  }
  
  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}