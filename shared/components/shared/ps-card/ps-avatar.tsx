import { cn } from "@/shared/utils/utils"
import Image from "next/image";
import React from "react"
export interface PsAvatarProps {
  className?: string,
  avatar?: string;
}

export const PsAvatar = ({ className, avatar }: PsAvatarProps) => {
  return <div className={cn("bg-secondary flex justify-center items-center rounded-lg p-3 border border-accent w-[120px] h-[120px] shrink-0 relative", className)}>
    <Image src={avatar || "/ps-avatar.svg"} alt="PsAvatar"  width={96} height={96} className="rounded-[15px]"/>

    <div className="absolute top-[9px] right-[14px] bg-secondary rounded-full flex justify-center items-center p-[2.5px]">
      <div className="h-[9px] w-[9px] rounded-full bg-salad"></div>
    </div>
  </div>
}
