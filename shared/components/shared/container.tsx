
import React from "react";
import { cn } from "../../utils/utils";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1184px]", className)}>{children}</div>
  );
};
