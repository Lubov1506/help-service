import { HomeContent, HomeImg } from "@/shared/components";
import { cn } from "@/shared/utils/utils";
import React from "react";

export interface PageProps {
  className?: string;
}

const Page = ({ className }: PageProps) => {
  return (
    <div className={cn('flex justify-between items-center py-[78px]', className)}>

        <HomeContent />
        <HomeImg />

    </div>
  );
};
export default Page;
