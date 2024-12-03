import React from "react";
import { cn } from "../../utils/utils";
import { Button } from "./button";
import { MoveUpRight } from "lucide-react";
export interface HomeContentProps {
  className?: string;
}

export const HomeContent = ({ className }: HomeContentProps) => {
  return (
    <div className={cn(className, "w-[595px] flex flex-col gap-4")}>
      <h1 className="font-semibold text-[80px] leading-tight ">
        The road to the <span className="text-accent italic">depths</span> of
        the human soul
      </h1>
      <p className="text-lg font-medium w-[510px] leading-[1.33] tightest">
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <Button green text="Get started" icon={<MoveUpRight />} className="px-[50px] py-[18px] mt-5" />
    </div>
  );
};
