import { cn } from "@/shared/utils/utils";
import React from "react";

export interface FormInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export const FormInput = ({
  className,
  type = "text",
  placeholder = "",
  icon,
  onIconClick,
}: FormInputProps) => {
  return (
    <label className="flex items-center justify-between relative">
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "p-4 border rounded-radius-md bg-transparent leading-5 placeholder:text-primary w-full ",
          className
        )}
      />
      {icon && <div className="absolute right-4" onClick={onIconClick}>{icon}</div>}
    </label>
  );
};
