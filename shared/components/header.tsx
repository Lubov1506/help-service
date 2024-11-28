import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { AuthBlock } from "./auth-block";
import { cn } from "../utils/utils";
export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <Container>
      <header
        className={cn(className, " flex justify-between align-baseline py-6 ")}
      >
        <Logo />
        <NavLinks />
        <AuthBlock />
      </header>
    </Container>
  );
};
