import React from "react"
import { Review } from "./review.types"
import { PsReviewItem } from "./ps-review-item"
import { cn } from "@/shared/utils/utils"
export interface PsReviewsProps {
  className?: string
  reviews: Review[]
}

export const PsReviews = ({ className, reviews }: PsReviewsProps) => {
  return (
    <div className={cn("flex flex-col gap-[25px]", className)}>
      {!!reviews.length &&
        reviews.map((review, index) => (
          <PsReviewItem key={index} review={review} />
        ))}
    </div>
  )
}
