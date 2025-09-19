import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  onClick?: () => void; // Add the onClick prop here
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const cardVariants = {
  default: "bg-white border border-gray-200 shadow-sm",
  elevated: "bg-white shadow-lg border border-gray-100",
  outlined: "bg-white border-2 border-gray-300 shadow-none",
  glass: "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg",
};

const cardPaddings = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
};

export function Card({
  children,
  className,
  variant = "default",
  padding = "lg",
  hover = false,
  onClick, // Destructure the onClick prop
}: CardProps) {
  return (
    <div
      onClick={onClick} // Pass the onClick handler to the div
      className={cn(
        "rounded-xl transition-all duration-300",
        cardVariants[variant],
        cardPaddings[padding],
        hover && "hover:shadow-xl hover:-translate-y-1 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-gray-200", className)}>
      {children}
    </div>
  );
}
