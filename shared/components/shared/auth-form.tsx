import React from "react";
import { Button } from "./button";
import { cn } from "@/shared/utils/utils";
import { FormInput } from "./form-input";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { AuthModalType } from "./auth-block";

export interface AuthFormProps {
  className?: string;
  type: AuthModalType;
}

export const AuthForm = ({ className, type }: AuthFormProps) => {
  const [isPrivate, setIsPrivate] = React.useState(true);
  const togglePrivate = () => setIsPrivate(!isPrivate);
  return (
    <form className={cn("flex flex-col gap-10 items-stretch", className)}>
      <div className="flex flex-col gap-[18px]">
        {type === AuthModalType.REGISTRATION && (
          <FormInput type="text" placeholder="Name" />
        )}
        <FormInput type="text" placeholder="Email" />
        <FormInput
          type={isPrivate ? "password" : "text"}
          placeholder="Password"
          icon={isPrivate ? <EyeOff /> : <Eye />}
          onIconClick={togglePrivate}
        />
      </div>

      <Button green className=" items-stretch">
        Log In
      </Button>
    </form>
  );
};
