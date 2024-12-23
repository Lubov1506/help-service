import { cn } from "@/shared/utils/utils"
import React from "react"
export interface PsInfoItemProps {
  className?: string,
  name?: string,
  value?: string,
}

export const PsInfoItem = ({ className, name, value }: PsInfoItemProps) => {
  return <div className={cn("flex bg-[#f3f3f3] py-2 px-4 rounded-3xl", className)}>
    <p className="text-card-text text-base">{name}: <span className="font-medium text-primary">{value}</span></p>
  </div>
}
