import React from "react";
import { cn } from "../utils/utils";
export interface SquareProps {
  className?: string;
  size?: string;
  bg?: string;
  icon?: React.ReactNode;
  blockRotate?: string;
  iconRotate?: number;
}

export const Square = ({
  className,
  size = "40px",
  bg = "green",
  icon,
  iconRotate,
  blockRotate = "0",
}: SquareProps) => {
  const sizeClass = `w-[${size}px] h-[${size}px]`;
  const bgClass = `bg-${bg}`;
  console.log(sizeClass, bgClass, blockRotate);

  return (
    <div
      style={{
        backgroundColor: bg,
        height: size,
        width: size,
        transform: `rotate(${blockRotate}deg)`,
      }}
      className={cn(
        ` flex items-center justify-center rounded-[10px] text-foreground font-bold absolute `,
        className
      )}
    >
      {icon && (
        <div
          style={{ transform: `rotate(${iconRotate}deg)` }}
          className={cn(`text-foreground font-bold`)}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
