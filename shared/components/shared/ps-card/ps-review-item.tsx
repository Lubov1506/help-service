import React from "react"
import { Review } from "./review.types"
import { cn } from "@/shared/utils/utils"
import { Star } from "lucide-react"
export interface PsReviewItemProps {
  className?: string
  review?: Review
}

export const PsReviewItem = ({ className, review }: PsReviewItemProps) => {
  return (
    <div className={cn("flex gap-4 flex-col", className)}>
      <header className="flex gap-3 font-medium">
        <div className='rounded-full w-[44px] h-[44px] flex justify-center items-center bg-rev-avatar-bg p-[13px]'>
          <p className='text-xl font-medium text-btn'>
            {review?.reviewer[0].toUpperCase()}
          </p>
        </div>
        <div className="text-base flex flex-col gap-[5px]">
          <h2>{review?.reviewer}</h2>
          <div className='flex gap-2 leading-tight '>
              <Star color='#ffc531' fill='#ffc531' size={16}/>
              <p>{review?.rating}</p>
            </div>
        </div>
      </header>
      <p className="text-card-text text-base">{review?.comment}</p>
    </div>
  )
}
