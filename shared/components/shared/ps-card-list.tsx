"use client";
import React from "react";
import { cn } from "@/shared/utils/utils";

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Psychologist {
  name: string;
  avatar_url: string;
  experience: string;
  reviews: Review[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export interface PsCardListProps {
  className?: string;
  psychologists: Psychologist[];
}

export const PsCardList: React.FC<PsCardListProps> = ({ className, psychologists }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      {!!psychologists.length &&
        psychologists.map((psychologist, index) => (
          <div key={index}>
            <h2>{psychologist.name}</h2>
            <p>{psychologist.specialization}</p>
          </div>
        ))}
    </div>
  );
};
