import Link from "next/link";
import React from "react";
export interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <Link className="font-bold py-3 text-xl flex" href="/"> 

        <span className="text-accent">psychologists.</span>services
      </Link>
    </div>
  );
};
