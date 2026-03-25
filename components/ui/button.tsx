import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue',
        secondary: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-green',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-gray-100 text-gray-900',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        xs: 'h-8 px-3 text-xs',
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
