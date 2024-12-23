"use client"
import React, { useState } from "react"
import { PsAvatar } from "./ps-avatar"
import { Psychologist } from "../ps-card-list"
import { cn } from "@/shared/utils/utils"
import { Star, Heart } from "lucide-react"
import { PsInfo } from "./ps-info"
import { BtnReadMore } from "./btn-read-more"
import { PsReviews } from "./ps-reviews"
export interface PsCardProps {
  className?: string
  psychologist: Psychologist
}

export const PsCard = ({ className, psychologist }: PsCardProps) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false)
  const openReviews = () => setIsReviewsOpen(true)
  const closeReviews = () => setIsReviewsOpen(false)
  return (
    <div className={cn("flex gap-6 p-6 bg-secondary rounded-3xl", className)}>
      <PsAvatar avatar={psychologist.avatar_url} />
      <div className='flex flex-col gap-4 w-full'>
        <header className='flex justify-between w-full items-baseline'>
          <div className='flex flex-col gap-2'>
            <p className='text-card-text text-base'>Psychologist</p>
            <h2 className='text-2xl text-primary font-medium '>
              Dr. Mark Thompson
            </h2>
          </div>

          <section className='flex gap-4 text-primary text-base font-medium leading-normal '>
            <div className='flex gap-2 border-r-[1px] pr-4'>
              <Star color='#ffc531' fill='#ffc531' />
              <p>Rating: {psychologist.rating}</p>
            </div>
            <div>
              <p>
                Price / 1 hour:
                <span className='text-salad '>
                  {psychologist.price_per_hour}$
                </span>
              </p>
            </div>
            <Heart />
          </section>
        </header>
        <PsInfo psychologist={psychologist} />
        <p className='text-card-text text-base'>{psychologist.about}</p>
        {!isReviewsOpen && <BtnReadMore onClick={openReviews} />}
        {isReviewsOpen && (
          <div>
            <PsReviews reviews={psychologist.reviews} />
            <BtnReadMore isHide onClick={closeReviews} />
          </div>
        )}
      </div>
    </div>
  )
}
