import React from "react";
import { Button } from "./button";
import { cn } from "../utils/utils";
export interface AuthBlockProps {
  className?: string;
}

export const AuthBlock = ({ className }: AuthBlockProps) => {
  return (
    <div className={cn('flex gap-2', className)}>
      <Button text="Log in" />
      <Button text="Registration" green />
    </div>
  );
};
