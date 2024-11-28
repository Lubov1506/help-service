import React from "react";
import { cn } from "../utils/utils";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  green?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  className,
  text,
  green,
  icon,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex gap-2 max-w-max border min-w-[124px] min-h-[48px] py-[14px] px-10 rounded-lg hover:bg-btn hover:text-secondary text-xl bg-foreground",
        green && "bg-btn hover:bg-btn-accent text-secondary",
        className
      )}
    >
      {children && children}
      {text}
      {icon && <div>{icon}</div>}
    </button>
  );
};
