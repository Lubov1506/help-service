import { cn } from '@/shared/utils/utils';
import React from 'react';
export interface BtnReadMoreProps {
  className?: string;
  onClick?: () => void;
  isHide?: boolean
}

export const BtnReadMore = ({ className, onClick, isHide }: BtnReadMoreProps) => {
  return <button onClick={onClick} className={cn('text-base font-medium text-primary underline leading-normal self-start', className)}>
    {isHide ? "Hide" : "Read more"}
</button>;
};