import Image from "next/image";
import React from "react";
import { Check } from "lucide-react";
import { Button } from "./button";
import { cn } from "../utils/utils";
import { Square } from "./square";
import { Users } from "lucide-react";
export interface HomeImgProps {
  className?: string;
}

export const HomeImg = ({ className }: HomeImgProps) => {
  return (
    <div className={cn("relative ", className)}>
      <Image
        src="/images/title.webp"
        className="rounded-[18px]"
        alt="title"
        width={464}
        height={528}
      />

      <Square size="40px" bg="#4535af" icon={<p>?</p>} blockRotate='345' iconRotate={15} className="top-[30%] left-[-30px]"/>
      <Square size="59px" bg="#FBC75E" icon={<Users />} blockRotate='15' iconRotate={0} 
      className="top-[10%] right-[-40px]"/>

      <Button
        green
        className="pointer-events-none absolute bottom-[75px] left-[-100px] p-8 border-transparent flex gap-4"
      >
        <div className="text-btn font-extrabold min-w-[54px] min-h-[54px] p-3 rounded-[13px] bg-foreground">
          <Check size={30} />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-sm opacity-50 font-normal">
            Experienced psychologists
          </p>
          <h2 className="font-bold text-2xl">15,000</h2>
        </div>
      </Button>
    </div>
  );
};
