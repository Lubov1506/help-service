"use client";
import React from "react";
import { cn } from "../../utils/utils";
import { AuthModal } from "./auth-modal";

export enum AuthModalType {
  LOGIN,
  REGISTRATION,
}export interface AuthBlockProps {
  className?: string;
}

export const AuthBlock = ({ className }: AuthBlockProps) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <AuthModal type={AuthModalType.LOGIN}  />
      <AuthModal type={AuthModalType.REGISTRATION}  />
    </div>
  );
};
