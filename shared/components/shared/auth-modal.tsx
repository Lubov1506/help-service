import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AuthForm } from "./auth-form";
import { AuthModalType } from "./auth-block";
import { cn } from "@/shared/utils/utils";
export interface AuthModalProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  type: AuthModalType;
}

export const AuthModal = ({type}: AuthModalProps) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn("btn", type === AuthModalType.REGISTRATION && "green-btn")}
      >
        {type === AuthModalType.LOGIN ? "Log In" : "Registration"}
      </DialogTrigger>
      <DialogContent className="bg-foreground max-w-[566px] p-[64px] flex flex-col gap-10">
        <DialogHeader>
          <div className="flex flex-col gap-5">
            <DialogTitle className="text-[40px] leading-[1.2] font-medium tracking-tightest">
              {type === AuthModalType.LOGIN ? " Log In" : "Registration"}
            </DialogTitle>
            <DialogDescription className="text-muted leading-5 text-base font-normal">
              Welcome back! Please enter your credentials to access your account
              and continue your search for a psychologist.
            </DialogDescription>
          </div>
        </DialogHeader>
        {<AuthForm type={type}/>}
      </DialogContent>
    </Dialog>
  );
};
