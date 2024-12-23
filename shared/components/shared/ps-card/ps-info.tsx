import React from 'react';
import { Psychologist } from '../ps-card-list';
import { cn } from '@/shared/utils/utils';
import { PsInfoItem } from './ps-info-item';
export interface PsInfoProps {
  className?: string;
  psychologist: Psychologist
}

export const PsInfo = ({ className, psychologist }: PsInfoProps) => {
  return <div className={cn("flex gap-1 gap-y-2 flex-wrap w-[88%]", className)}>
    <PsInfoItem name='Experience' value={psychologist.experience} />
    <PsInfoItem name='License' value={psychologist.license} />
    <PsInfoItem name='Specialization' value={psychologist.specialization} />
    <PsInfoItem name='Initial_consultation' value={psychologist.initial_consultation} />
</div>;
}; 